import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Modal, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

const LocationScreen = ({ visible, onClose, navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        })();
    }, []);

    const INDIA_REGION = {
        latitude: 22.3511148,
        longitude: 78.6677428,
        latitudeDelta: 20,
        longitudeDelta: 20,
    };

    const handleSearch = async () => {
        console.log('Search for:', searchQuery);

        let results = await Location.geocodeAsync(searchQuery);
        if (results.length > 0) {
            let { latitude, longitude } = results[0];
            setLocation({
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            });
        }
    };

    const getCurrentLocation = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.BestForNavigation,
            });
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            });
        } catch (error) {
            // Handle or log error
            console.error(error);
            setErrorMsg(error.message);
        }
    };

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }


    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <SafeAreaView style={styles.safeArea}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={onClose}>
                            <Ionicons name="arrow-back" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Set delivery location</Text>
                    </View>
                    <View style={styles.searchSection}>
                        <View style={styles.searchBarContainer}>
                            <TextInput
                                style={styles.searchBar}
                                placeholder="Address search e.g. Nilgiri's HSR"
                                onChangeText={setSearchQuery}
                                value={searchQuery}
                            />
                            <Ionicons name="ios-search" size={20} color="#a3a3a3" style={styles.searchIcon} />
                        </View>
                        <View style={styles.dividerContainer}>
                            <View style={styles.line} />
                            <Text style={styles.orText}>OR</Text>
                            <View style={styles.line} />
                        </View>
                        <TouchableOpacity onPress={getCurrentLocation} style={styles.currentLocationContainer}>
                            <Ionicons name="ios-locate" size={24} color="#4CAF50" style={styles.locationIcon} />
                            <Text style={styles.currentLocationText}>Use current location</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mapContainer}>
                        <MapView
                            style={styles.map}
                            initialRegion={INDIA_REGION}
                            region={location}
                        >
                            {location && <Marker coordinate={location} />}
                        </MapView>
                    </View>
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
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e2e2e2',
        backgroundColor: 'white'
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 24
    },
    searchSection: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingTop: 16,
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
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    map: {
        height: 200,
        borderRadius: 8,
        // marginHorizontal: 16,
        marginBottom: 16,
    },
});

export default LocationScreen;
