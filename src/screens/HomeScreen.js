import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker component
import pLogo from '../../assets/logo1.png'
import car from '../../assets/car1.png'
import bike from '../../assets/bike1.png'

export default function HomeScreen({ navigation }) {
    const [searchText, setSearchText] = useState('');
    const [selectedVehicleType, setSelectedVehicleType] = useState('Car');

    const handleSearchSubmit = () => {
        const vehicleDetails = {
            vehicleName: selectedVehicleType,
            model: 'XYZ',
            year: '2022',
            vehicleType: selectedVehicleType,
        };

        navigation.navigate('VehicleDetails', vehicleDetails);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Please Enter Vehicle Registration NO.</Text>
            <TextInput
                style={styles.searchBox}
                placeholder="Enter your vehicle number"
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
            />

            <View style={styles.imageContainer}>
                <TouchableWithoutFeedback onPress={() => setSelectedVehicleType('Car')}>
                    <Image
                        source={car} // Update path accordingly
                        style={[styles.vehicleImage, selectedVehicleType === 'Car' && styles.selectedImage]}
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => setSelectedVehicleType('Bike')}>
                    <Image
                        source={bike} // Update path accordingly
                        style={[styles.vehicleImage, selectedVehicleType === 'Bike' && styles.selectedImage]}
                    />
                </TouchableWithoutFeedback>
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSearchSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    picker: {
        width: '80%',
        height: 40,
        borderColor: '#138808',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    vehicleImage: {
        width: 100,
        aspectRatio: 1,
        resizeMode: 'contain',
        backgroundColor: 'transparent', // Set background color to transparent
    },
    
    selectedImage: {
        borderColor: 'blue',
        borderWidth: 2,
    },
    searchBox: {
        width: '80%',
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    submitButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});