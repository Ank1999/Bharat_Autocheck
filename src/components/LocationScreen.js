import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    FlatList,
    TouchableOpacity,
    Text,
    Modal,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    ScrollView,
    Platform
} from 'react-native';
import MapView from 'react-native-maps';

const LocationScreen = ({ visible, onClose, navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');

    // Placeholder data for recent and saved addresses
    const recentSearches = ['Gera World of Joy', 'BJRD SPORTS'];
    const savedAddresses = ['homew', 'hommmm', 'homes', 'OFFICE'];

    return (


        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.modalContainer}>
                        <ScrollView contentContainerStyle={styles.scrollViewContent}>
                            <View style={styles.modalContent}>
                                {/* Search Bar */}
                                <TextInput
                                    style={styles.searchBar}
                                    placeholder="Address search e.g. Nilgiri's HSR"
                                    onChangeText={setSearchQuery}
                                    value={searchQuery}
                                />

                                {/* Current Location Button */}
                                <TouchableOpacity style={styles.currentLocationButton}>
                                    <Text>Use current location</Text>
                                </TouchableOpacity>

                                {/* Recent Searches */}
                                <Text style={styles.sectionTitle}>Recent Searches</Text>
                                <FlatList
                                    data={recentSearches}
                                    renderItem={({ item }) => <Text>{item}</Text>}
                                    keyExtractor={(item, index) => index.toString()}
                                />

                                {/* Saved Addresses */}
                                <Text style={styles.sectionTitle}>Saved Addresses</Text>
                                <FlatList
                                    data={savedAddresses}
                                    renderItem={({ item }) => <Text>{item}</Text>}
                                    keyExtractor={(item, index) => index.toString()}
                                />


                                {/* <MapView
                                    style={styles.map}
                                   
                                    initialRegion={{
                                        latitude: 20.5937,
                                        longitude: 78.9629,
                                        latitudeDelta: 22.0,
                                        longitudeDelta: 22.0,
                                    }}
                                /> */}
                            </View>
                        </ScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Modal>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        // alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    searchBar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 10,
    },
    currentLocationButton: {
        margin: 10,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10,
        marginLeft: 10,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default LocationScreen;
