import React, { useState, useEffect, useRef } from 'react';
import {
    View, StyleSheet, Text, TouchableOpacity, Modal, FlatList,
    KeyboardAvoidingView, SafeAreaView, Platform, Image, TextInput, ScrollView
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LocationScreen = ({ visible, onClose, onSaveAddress, savedAddress }) => {
    const [useCurrentLocation, setUseCurrentLocation] = useState(false);
    const [useConfirmLocation, setUseConfirmLocation] = useState(false);
    // const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);
    const [address, setAddress] = useState("Fetching address...");
    const [isMapReady, setIsMapReady] = useState(false);
    const [showAddressDetails, setShowAddressDetails] = useState(false);
    const [location, setLocation] = useState({
        latitude: 37.78825, // Default latitude
        longitude: -122.4324, // Default longitude
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [localSavedAddresses, setLocalSavedAddresses] = useState([]);


    const mapRef = useRef(null);

    useEffect(() => {
        if (visible) {
            // Reset the states to ensure the default screen is shown
            setShowAddressDetails(false);
            setUseCurrentLocation(false);
            setUseConfirmLocation(false);
        }
    }, [visible]);

    useEffect(() => {
        // If savedAddress is a string, convert it to an array; otherwise, use it directly if it's already an array
        const addresses = Array.isArray(savedAddress) ? savedAddress : [savedAddress].filter(Boolean);
        setLocalSavedAddresses(addresses);
    }, [savedAddress])

    useEffect(() => {
        const loadSavedAddresses = async () => {
            try {
                const savedAddressesString = await AsyncStorage.getItem('savedAddresses');
                const savedAddresses = savedAddressesString ? JSON.parse(savedAddressesString) : [];
                setLocalSavedAddresses(savedAddresses);
            } catch (error) {
                console.error('Failed to load saved addresses:', error);
            }
        };

        loadSavedAddresses();
    }, []);

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

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const toRadians = (angle) => {
            return angle * (Math.PI / 180);
        };

        const earthRadius = 6371; // Radius of the Earth in kilometers

        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon2 - lon1);

        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const distance = earthRadius * c; // Distance in kilometers

        return distance;
    };

    const handleSearch = async (text) => {
        setQuery(text);
        if (text.length > 3) {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${text}&countrycodes=in`);
            const data = await response.json();

            // Calculate distance from user's location for each suggestion
            const suggestionsWithDistance = data.map(item => {
                const suggestionLatitude = parseFloat(item.lat);
                const suggestionLongitude = parseFloat(item.lon);
                const distance = calculateDistance(location.latitude, location.longitude, suggestionLatitude, suggestionLongitude);
                return { ...item, distance };
            });

            // Sort suggestions based on distance
            const sortedSuggestions = suggestionsWithDistance.sort((a, b) => a.distance - b.distance);

            setSuggestions(sortedSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSelectLocation = async (item) => {
        const latitude = parseFloat(item.lat);
        const longitude = parseFloat(item.lon);

        if (!isNaN(latitude) && !isNaN(longitude)) {
            await fetchAndSetAddress(latitude, longitude);
            setLocation({ latitude, longitude, latitudeDelta: 0.0050, longitudeDelta: 0.0050 });

            if (isMapReady) {
                updateLocationAndAnimateMap(latitude, longitude);
            } else {
                console.log('Map is not ready when trying to animate to search result.');
            }

            setUseConfirmLocation(true);
            setSuggestions([]);
            setQuery('');
            setIsSearchInputFocused(false);
        }
    };



    const getCurrentLocation = () => {
        setUseCurrentLocation(true);
    };

    const selectConfirmLocation = () => {
        setShowAddressDetails(true);
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
            const boundingBox = '68.1766451354,6.7549280873,97.4025614766,35.4940095078';
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&bounded=1&viewbox=${boundingBox}&countrycodes=in`;

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

    const handleSaveAddress = async () => {
        // Assuming 'address' contains the new address to be added
        if (!localSavedAddresses.includes(address)) {
            const updatedAddresses = [...localSavedAddresses, address];
            // Save the updated addresses to AsyncStorage
            try {
                // Reverse the updatedAddresses array before saving to AsyncStorage
                const reversedAddresses = updatedAddresses.slice().reverse();
                await AsyncStorage.setItem('savedAddresses', JSON.stringify(reversedAddresses));
                setLocalSavedAddresses(reversedAddresses); // Update local state with new addresses
                console.log('Saved addresses to AsyncStorage:', reversedAddresses);
                onSaveAddress(reversedAddresses); // Ensure this prop is correctly passed from HomeScreen
            } catch (error) {
                console.error('Failed to save addresses:', error);
            }
        }

        onClose(); // Close the modal or location screen
    };

    const handleDeleteAddress = async (index) => {
        const updatedAddresses = localSavedAddresses.filter((_, i) => i !== index);
        setLocalSavedAddresses(updatedAddresses); // Update local state with the updated addresses

        // Save the updated addresses to AsyncStorage
        try {
            await AsyncStorage.setItem('savedAddresses', JSON.stringify(updatedAddresses));
            onSaveAddress(updatedAddresses); // Ensure this prop is correctly passed from HomeScreen
        } catch (error) {
            console.error('Failed to delete address:', error);
        }
    };


    const goBackToMap = () => {
        setShowAddressDetails(false);
        // If needed, add logic to determine whether to go back to confirm or current location screen
    };

    const handleSelectAddress = (address) => {
        console.log("Selected address:", address);
        // Perform actions with the selected address
        // For example, update the current location or close the modal
    };


    const renderConfirmView = () => {
        const headerTitle = useCurrentLocation ? 'Set Delivery Location' : 'Confirm Location';
        const confirmButtonText = useCurrentLocation ? 'Set Location' : 'Confirm Location';

        if (!location) {
            // You can either return null or some loading indicator
            return <Text>Loading map...</Text>;
        }

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
                        initialRegion={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.0050,
                            longitudeDelta: 0.0050,
                        }}

                        onMapReady={() => setIsMapReady(true)}
                        onRegionChangeComplete={handleRegionChangeComplete}
                    >
                    </MapView>
                    <View style={styles.markerFixed}>
                        <Image style={styles.markerIcon} source={require('../../assets/marker.png')} />
                        {/* <Text style={styles.deliveryMessage}>Your order will be delivered here</Text> */}
                    </View>
                </SafeAreaView>

                <View >
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
    };

    const renderAddressDetailsView = () => {
        return (
            <View>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerIcon} onPress={goBackToMap}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle1}>Add address Details</Text>
                </View>
                <ScrollView style={styles.addressDetailsContainer}>
                    <MapView
                        style={styles.mapSmall}
                        initialRegion={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.0030,
                            longitudeDelta: 0.0030,
                        }}
                        scrollEnabled={false}
                        pitchEnabled={false}
                        rotateEnabled={false}
                        zoomEnabled={false}
                    >
                        <Marker
                            coordinate={{
                                latitude: location.latitude,
                                longitude: location.longitude,
                            }}
                        />
                    </MapView>
                    <View style={styles.locationContainer}>
                        <Text style={styles.locationHeader}>{address}</Text>
                        <TouchableOpacity onPress={goBackToMap} style={styles.changeButtonSmall}>
                            <Text style={styles.buttonText}>Change</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.inputField}
                        placeholder="House / Flat number"
                    // Add onChangeText and other props as needed
                    />
                    <TextInput
                        style={styles.inputField}
                        placeholder="Apartment / Building name"
                    // Add onChangeText and other props as needed
                    />
                    <TextInput
                        style={styles.inputField}
                        placeholder="contact number"
                    // Add onChangeText and other props as needed
                    />


                </ScrollView>
                <View style={styles.footer}>
                    {/* <View style={styles.addressContainer}> */}

                    <TouchableOpacity onPress={handleSaveAddress} style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>Add address</Text>
                    </TouchableOpacity>
                    {/* </View> */}
                </View>
            </View>
        );
    };

    const renderDefaultSearchView = () => {
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
                        {savedAddress && (
                            <ScrollView style={styles.savedAddressesContainer}>
                                {localSavedAddresses.map((address, index) => (
                                    <View key={index} style={styles.savedAddressItemContainer}>
                                        <TouchableOpacity style={styles.savedAddressItem} onPress={() => handleSelectAddress(address)}>
                                            <Text style={styles.savedAddressText}>
                                                {address}
                                            </Text>
                                        <TouchableOpacity onPress={() => handleDeleteAddress(index)} style={styles.deleteButton}>
                                            <MaterialIcons name="delete" size={24} color='red' style={styles.deleteButtonText} />
                                        </TouchableOpacity>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </ScrollView>
                        )}

                    </>
                )}
            </View>
        );
    };

    const renderContent = () => {
        if (showAddressDetails) {
            return renderAddressDetailsView();
        } else if (useConfirmLocation || useCurrentLocation) {
            return renderConfirmView();
        } else {
            return renderDefaultSearchView();
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
        borderColor: '#4CAF50',

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
        maxHeight: 600,
        padding: 10 // Adjust based on your UI needs
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    itemText: {
        fontSize: 16,
    },
    addressDetailsContainer: {
        // flex: 1,
        backgroundColor: 'white',
    },
    mapSmall: {
        width: '100%',
        height: 300, // Set the height of the small map
    },
    locationContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    },
    locationHeader: {
        fontWeight: 'bold',
        fontSize: 14,
        padding: 15,
        width: '75%'
    },
    inputField: {
        borderWidth: 1,
        borderColor: '#e2e2e2',
        padding: 15,
        margin: 15,
        borderRadius: 5,
    },
    saveButton: {
        backgroundColor: '#5CB85C',
        padding: 15,
        margin: 15,
        borderRadius: 25,
    },
    saveButtonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    changeButtonSmall: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#4CAF50',
        textAlign: 'center',
        justifyContent: 'center',

    },
    buttonText: {
        fontWeight: 'bold',
        color: '#5CB85C',
    },
    footer: {
        borderTopWidth: 0.2,
        borderBottomColor: '#eee',
        paddingVertical: 15,
    },
    savedAddressesContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    savedAddressItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    savedAddressItem: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        flexDirection: 'row',
        alignSelf:'center',
        justifyContent:'center',
        width:'97%',
    },
    savedAddressText: {
        fontSize: 16,
        color: '#333333',
    },
    deleteButton: {
        // backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: 'red',
        fontWeight: 'bold',
    },

});

export default LocationScreen;
