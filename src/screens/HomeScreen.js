import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker component
import pLogo from '../../assets/logo1.png'
import car from '../../assets/Car.jpg'
import bike from '../../assets/Bike.png'



export default function HomeScreen({ navigation }) {
    const [searchText, setSearchText] = useState('');
    const [selectedVehicleType, setSelectedVehicleType] = useState(null);

    const handleSearchSubmit = () => {
        const vehicleDetails = {
            vehicleNumber: searchText,
            model: 'XYZ',
            year: '2022',
            vehicleType: selectedVehicleType,  // Use the selectedVehicleType value
        };
    
    //    const data = (JSON.stringify(vehicleDetails, null, 2)); 

        navigation.navigate('VehicleDetails', {...vehicleDetails})
    };

    const handleImageClick = (vehicleType) => {
        setSelectedVehicleType(vehicleType);
        handleSearchSubmit();  // Optionally, you can call handleSearchSubmit here if needed
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
                <TouchableWithoutFeedback onPress={() => handleImageClick('Car')}>
                    <Image
                        source={car} // Update path accordingly
                        style={[styles.vehicleImage, selectedVehicleType === 'Car' && styles.selectedImage]}
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => handleImageClick('Bike')}>
                    <Image
                        source={bike} // Update path accordingly
                        style={[styles.vehicleImage, selectedVehicleType === 'Bike' && styles.selectedImage]}
                    />
                </TouchableWithoutFeedback>
            </View>

            {/* <TouchableOpacity style={styles.submitButton} onPress={handleSearchSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity> */}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    searchBox: {
        width: '100%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 16,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        marginBottom: 20,
    },
    vehicleImage: {
        width: '45%', // 45% of the container width
        aspectRatio: 1, // Maintain a square aspect ratio
        borderRadius: 10,
        overflow: 'hidden', // Clip the shadow
        elevation: 5, // Shadow for Android
        shadowColor: 'black', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedImage: {
        borderWidth: 2,
        borderColor: 'blue',
    },
    submitButton: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});