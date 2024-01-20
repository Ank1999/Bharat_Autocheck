import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, Image, TouchableWithoutFeedback } from 'react-native';
import pLogo from '../../assets/logo1.png'
import car from '../../assets/Car.jpg'
import bike from '../../assets/Bike.png'
import Header from '../Global/header';


export default function HomeScreen({ navigation }) {
    const [searchText, setSearchText] = useState('');
    const [selectedVehicleType, setSelectedVehicleType] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [radioSelection, setRadioSelection] = useState(null); // New state for radio buttons
    const [isInputClicked, setIsInputClicked] = useState(false);


    const handleOptions = (option) => {
        setSelectedOption(option);
    };

    const handleRadioSelect = (value) => {
        setRadioSelection(value);
    };

    const handleInputClick = () => {
        setIsInputClicked(true);
    };

    const handleSubmit = () => {
        const vehicleDetails = {
            vehicleNumber: searchText,
            vehicleType: selectedVehicleType,  // Use the selectedVehicleType value
        };
        navigation.navigate('VehicleDetails', { ...vehicleDetails })
    };

    const handleProfileClick = () => {
        // Add your logic here
        // For example, you might navigate to a profile screen or open a menu
        console.log(' button clicked');
    };

    return (
        <View style={styles.container}>
            <Header handleProfileClick={handleProfileClick} />

            {/* Button Container */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => handleOptions('Car')}>
                    <Text style={styles.buttonText}>Car</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleOptions('Bike')}>
                    <Text style={styles.buttonText}>Bike</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleOptions('Mechanic')}>
                    <Text style={styles.buttonText}>Mechanic</Text>
                </TouchableOpacity>
            </View>

            {/* Conditional Input and Radio Buttons */}
            {selectedOption && (
                <View>
                    <Text style={styles.header}>Please Enter {selectedOption} Details.</Text>
                    {/* Radio Buttons */}
                    <View style={styles.radioButtonContainer}>
                        <TouchableOpacity
                            style={[styles.radioButton, radioSelection === 'Used' && styles.selectedRadioButton]}
                            onPress={() => handleRadioSelect('Used')}>
                            <Text>Used</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.radioButton, radioSelection === 'New' && styles.selectedRadioButton]}
                            onPress={() => handleRadioSelect('New')}>
                            <Text>New</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.searchBox}
                        placeholder={`Enter your ${selectedOption.toLowerCase()} number`}
                        onChangeText={(text) => setSearchText(text)}
                        onFocus={handleInputClick}
                    // value and onChangeText as needed
                    />

                    {/* Additional Input Boxes */}
                    {isInputClicked && (
                        <View>
                            <TextInput style={styles.searchBox} placeholder="User Name" />
                            <TextInput style={styles.searchBox} placeholder="User Contact Number" />
                            <TextInput style={styles.searchBox} placeholder="User Contact Number" />
                            {/* Add more TextInput components as needed */}
                        </View>
                    )}

                    {/* Submit Button */}
                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            )}


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
    buttonContainer: {
        position: 'absolute', // Positioning it absolutely
        top: 150, // Align it to the top of the screen
        left: 0, // Align it to the left of the screen
        right: 0, // Stretch it to the right of the screen,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#f0f0f0', // Example background color,

    },
    button: {
        padding: 10,
        backgroundColor: '#ddd', // Example button color
        borderRadius: 15,
        width: '30%',
        height: 45,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    header: {
        // width:'100%',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop:150
    },
    radioButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    radioButton: {
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    selectedRadioButton: {
        backgroundColor: '#ddd', // Highlight color for selected radio button
    },
    searchBox: {
        minWidth: '100%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 16,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
    },
    submitButton: {
        backgroundColor: '#007bff', // Primary color for the button
        padding: 15, // Padding inside the button
        borderRadius: 10, // Rounded corners
        alignItems: 'center', // Center the text inside the button
        justifyContent: 'center', // Center vertically
        marginTop: 20, // Margin at the top
    },
    submitButtonText: {
        color: 'white', // Text color
        fontSize: 16, // Font size
        fontWeight: 'bold', // Font weight
    },
});