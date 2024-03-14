import React, { useState, useEffect, useRef } from 'react';
import {
    View, StyleSheet, Text, TouchableOpacity, Modal, FlatList,
    KeyboardAvoidingView, SafeAreaView, Platform, Image, TextInput
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const LocationScreen = ({ visible, onClose }) => {
    const [useCurrentLocation, setUseCurrentLocation] = useState(false);
    const [useConfirmLocation, setUseConfirmLocation] = useState(false);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);
    const [address, setAddress] = useState("Fetching address...");
    const [isMapReady, setIsMapReady] = useState(false);

    const mapRef = useRef(null);

    useEffect(() => {
        if (useCurrentLocation && isMapReady) {
            (async () => {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    return;
                }
                let locationResult = await Location.getCurrentPositionAsync({});
                const latitude = locationResult.coords.latitude;
                const longitude = locationResult.coords.longitude;

                await fetchAndSetAddress(latitude, longitude);
                updateLocationAndAnimateMap(latitude, longitude);

                setUseConfirmLocation(true);
            })();
        }
    }, [useCurrentLocation, isMapReady]);


    const updateLocationAndAnimateMap = (newLatitude, newLongitude, attempt = 1) => {
        const newRegion = {
            latitude: newLatitude,
            longitude: newLongitude,
            latitudeDelta: 0.0050,
            longitudeDelta: 0.0050,
        };

        if (mapRef.current) {
            console.log("Animating to region:", newRegion);
            mapRef.current.animateToRegion(newRegion, 2000);
        } else if (attempt <= 3) { // Retry up to 3 times
            console.log("Map ref is not ready, retrying...");
            setTimeout(() => updateLocationAndAnimateMap(newLatitude, newLongitude, attempt + 1), 500); // Retry after 500ms
        } else {
            console.log("Failed to animate to region after retries.");
        }
    };



    const handleSearch = async (text) => {
        setQuery(text);
        if (text.length > 3) {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${text}&countrycodes=in`);
            const data = await response.json();
            setSuggestions(data);
        } else {
            setSuggestions([]);
        }
    };
    const handleSelectLocation = async (item) => {
        const latitude = parseFloat(item.lat);
        const longitude = parseFloat(item.lon);

        // Ensure address fetching and state updates happen before map animation.
        await fetchAndSetAddress(latitude, longitude);

        // This ensures we're attempting to animate after we have the address and the map should be ready.
        if (isMapReady) {
            updateLocationAndAnimateMap(latitude, longitude);
        } else {
            console.log('Map is not ready when trying to animate to search result.');
        }

        setUseConfirmLocation(true);
        setSuggestions([]);
        setQuery('');
        setIsSearchInputFocused(false);
    };



    const getCurrentLocation = () => {
        setUseCurrentLocation(true);
    };

    const selectConfirmLocation = () => {
        console.log('Location confirmed:', location);
        onClose(); // Close the modal or navigate as needed
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => handleSelectLocation(item)}>
            <Text style={styles.itemText}>{item.display_name}</Text>
        </TouchableOpacity>
    );

    const clearSearch = () => {
        setQuery('');
        setSuggestions([]);
        setIsSearchInputFocused(false);
    };

    const handleRegionChangeComplete = (region) => {
        const newLocation = {
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
        };
        setLocation(newLocation); // Update location state if needed for other purposes
        fetchAndSetAddress(region.latitude, region.longitude); // Fetch new address
    };
    const reverseGeocodeLocation = async (latitude, longitude) => {
        try {
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
            const response = await fetch(url);
            const data = await response.json();
            if (data.error) {
                console.log('Error fetching address:', data.error);
                return "Address not found";
            }
            const address = data.display_name;
            return address;
        } catch (error) {
            console.error('Error reverse geocoding:', error);
            return "Error fetching address";
        }
    };


    const fetchAndSetAddress = async (latitude, longitude) => {
        console.log(`Fetching address for ${latitude}, ${longitude}`);
        const fetchedAddress = await reverseGeocodeLocation(latitude, longitude);
        console.log("..........", fetchedAddress)
        setAddress(fetchedAddress);
    };

    const renderContent = () => {
        if (useConfirmLocation || useCurrentLocation) {
            const headerTitle = useCurrentLocation ? 'Set Delivery Location' : 'Confirm Location';
            const confirmButtonText = useCurrentLocation ? 'Set Location' : 'Confirm Location';

            return (
                <View style={styles.mapContainer}>
                    <SafeAreaView style={styles.safeArea}>
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.headerIcon} onPress={() => {
                                setUseConfirmLocation(false);
                                setUseCurrentLocation(false);
                            }}>
                                <Ionicons name="arrow-back" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.headerTitle1}>{headerTitle}</Text>
                        </View>

                        <MapView
                            ref={mapRef}
                            style={styles.map}
                            showsUserLocation={true}
                            onMapReady={() => setIsMapReady(true)}
                            onRegionChangeComplete={handleRegionChangeComplete}
                        >
                        </MapView>
                        <View style={styles.markerFixed}>
                            <Image style={styles.markerIcon} source={require('../../assets/marker.png')} />
                            {/* <Text style={styles.deliveryMessage}>Your order will be delivered here</Text> */}
                        </View>
                    </SafeAreaView>

                    <View style={styles.footer}>
                        <View style={styles.addressContainer}>
                            <View style={styles.addressSubContainer}>
                                <View>
                                    <Text style={styles.addressTitleText}>Location</Text>
                                    <Text style={styles.addressSubTitleText}>{address}</Text>
                                </View>
                                <TouchableOpacity onPress={() => {
                                    setUseConfirmLocation(false);
                                    setUseCurrentLocation(false);
                                }} style={styles.changeButton}>
                                    <Text style={styles.buttonText}>Change</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={selectConfirmLocation} style={styles.setLocationButton}>
                                <Text style={styles.buttonText1}>{confirmButtonText}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            );
        } else {
            // Default search screen
            return (
                <View>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.headerIcon} onPress={onClose}>
                            <Ionicons name="arrow-back" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.searchSection}>
                        <Text style={styles.searchTitle}>Search for your location</Text>
                        <View style={styles.searchBarContainer}>
                            <Ionicons name="ios-search" size={20} color="#a3a3a3" style={styles.searchIcon} />
                            <TextInput
                                style={styles.searchBar}
                                placeholder="Address search e.g. Nilgiri's HSR"
                                onChangeText={handleSearch}
                                value={query} // Use 'query' here
                                onFocus={() => setIsSearchInputFocused(true)}
                                onBlur={() => setIsSearchInputFocused(false)}
                            />
                            {query.length > 0 && (
                                <TouchableOpacity onPress={clearSearch}>
                                    <MaterialIcons name="cancel" size={18} color="#a3a3a3" style={styles.searchIcon} />
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                    <FlatList
                        data={suggestions}
                        keyExtractor={(item) => item.place_id.toString()}
                        renderItem={renderItem}
                        style={styles.flatList}
                    />
                    {!isSearchInputFocused && query.length === 0 && (
                        <>
                            <View style={styles.dividerContainer}>
                                <View style={styles.line} />
                                <Text style={styles.orText}>OR</Text>
                                <View style={styles.line} />
                            </View>
                            <TouchableOpacity onPress={getCurrentLocation} style={styles.currentLocationContainer}>
                                <Ionicons name="ios-locate" size={24} color="#4CAF50" style={styles.locationIcon} />
                                <Text style={styles.currentLocationText}>Use current location</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </View>
            );
        }
    };

    return (
        <Modal visible={visible} transparent={true} animationType="slide" onRequestClose={onClose}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
                <SafeAreaView style={styles.safeArea}>
                    {renderContent()}
                </SafeAreaView>
            </KeyboardAvoidingView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e2e2e2',
    },
    headerIcon: {
        marginRight: 10,
    },
    headerTitle1: {
        fontSize: 18,
        fontWeight: 'bold',
        // marginBottom:10
    },
    serachText: {
        fontSize: 16,
        marginBottom: 10
    },
    searchSection: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    searchTitle: {
        fontSize: 17,
        fontWeight: '500',
        marginBottom: 10
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F3F5',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
    },
    searchBar: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#424242',
    },
    searchIcon: {
        marginLeft: 8,
    },
    clearButton: {
        padding: 10,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#E0E0E0',
    },
    orText: {
        marginHorizontal: 16,
        color: '#9E9E9E',
    },
    currentLocationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    locationIcon: {
        marginRight: 8,
    },
    currentLocationText: {
        fontSize: 16,
        color: '#4CAF50',
        textDecorationLine: 'none',
    },
    mapContainer: {
        flex: 1,
    },
    map: {
        flex: 1,
        width: '100%',
    },
    markerFixed: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: [{ translateX: -24 }, { translateY: -48 }], // Adjust based on the size of your marker image
        width: 48, // Adjust based on your marker size
        height: 48, // Adjust based on your marker size
    },
    markerIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    deliveryMessage: {
        color: 'black',
    },
    addressContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 20,
        backgroundColor: 'white',
    },
    addressSubContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addressTitleText: {
        fontWeight: 'bold',
    },
    addressSubTitleText: {
        fontSize: 12,
    },
    changeButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#4CAF50', // Green color to match the 'Set location' button
    },
    setLocationButton: {
        backgroundColor: '#5CB85C',
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        height: 45,
        alignItems: 'center',
        top: 15
    },
    buttonText: {
        color: '#5CB85C',
        fontWeight: 'bold',
        fontSize: 14,
    },
    buttonText1: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,

    },
    flatList: {
        maxHeight: 200, // Adjust based on your UI needs
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    itemText: {
        fontSize: 16,
    },
    // Add other styles you might need
});

export default LocationScreen;
