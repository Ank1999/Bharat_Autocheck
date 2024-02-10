import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, Image, TouchableWithoutFeedback } from 'react-native';
import AppHeader from '../Global/AppHeader';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTab from '../Navigation/BottomTabNavigation';
import Brand from '../Global/Brand';

const Tab = createBottomTabNavigator();

export default function ({ navigation }) {
    const [searchText, setSearchText] = useState('');
    const [selectedOption, setSelectedOption] = useState("Inspection");
    const [selectedSubOption, setSelectedSubOption] = useState(null);
    const [radioSelection, setRadioSelection] = useState("Car"); // New state for radio buttons
    const [isInputClicked, setIsInputClicked] = useState(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setSelectedOption('Inspection');
        });

        return unsubscribe;
    }, [navigation]);

    const handleOptions = (option) => {
        setSelectedOption(option);
        console.log(option)
        // if (option === 'Service') {
        //     navigation.navigate('Brand');
        // }
    };

    const handleRadioSelect = (value) => {
        console.log(handleRadioSelect);
        setRadioSelection(value);
    };

    const handleInputClick = () => {
        setIsInputClicked(true);
    };

    const handleSubmit = () => {
        // const vehicleDetails = {
        //     vehicleNumber: searchText,
        //     vehicleType: radioSelection,
        // };
        // navigation.navigate('VehicleDetails', { ...vehicleDetails })
        navigation.navigate('Brand');

    };

    const handleProfileClick = () => {
        console.log(' button clicked');
        navigation.navigate('UserProfile');
    };

    const handleBrandSelect = (brand) => {
        console.log('Selected brand:', brand.name);
        // Add further logic here as required
    };

    return (
        <View style={styles.container}>
            <AppHeader title="Welcome, Ank" onProfileClick={handleProfileClick} />

            {/* Button Container */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, selectedOption === 'Inspection' && styles.selectedButton,]} onPress={() => handleOptions('Inspection')}>
                    <Text style={styles.buttonText}>Inspection</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, selectedOption === 'Service' && styles.selectedButton,]} onPress={() => handleOptions('Service')}>
                    <Text style={styles.buttonText}>Service</Text>
                </TouchableOpacity>
            </View>

            {/* Radio Buttons */}
            <View style={styles.radioButtonContainer}>

                <View style={styles.radioButtonWithText}>
                    <TouchableOpacity
                        style={[styles.radioButton, radioSelection === 'Car' && styles.selectedRadioButton,]}
                        onPress={() => handleRadioSelect('Car')}>
                    </TouchableOpacity>
                    <Text
                        style={[styles.radioText, radioSelection === 'Car' && styles.selectedRadioText,]}>
                        Car
                    </Text>
                </View>

                <View style={styles.radioButtonWithText}>
                    <TouchableOpacity
                        style={[styles.radioButton, radioSelection === 'Bike' && styles.selectedRadioButton,]}
                        onPress={() => handleRadioSelect('Bike')}>

                    </TouchableOpacity>
                    <Text
                        style={[styles.radioText, radioSelection === 'Bike' && styles.selectedRadioText,]}>
                        Bike
                    </Text>
                </View>
            </View>

            {/* {selectedOption === 'Inspection' ? ( */}
            <View>
                <Text style={styles.header}>Please Enter {radioSelection} Details!</Text>
                <TextInput
                    style={styles.searchBox}
                    placeholder={`Enter your ${radioSelection} number`}
                    onChangeText={(text) => setSearchText(text)}
                    onFocus={handleInputClick}
                />
                <TextInput style={styles.searchBox} placeholder="Full Name" />
                <TextInput style={styles.searchBox} placeholder="Contact Number" />

                {/* Additional Input Boxes */}
                {/* {isInputClicked && (
                        <View>
                            <TextInput style={styles.searchBox} placeholder="Full Name" />
                            <TextInput style={styles.searchBox} placeholder="User Contact Number" />
                        </View>
                    )} */}

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
            {/* ) : ("")} */}
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
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#f0f0f0', // Example background color,
        position: 'relative',
        justifyContent: 'space-between',
        bottom: 10
    },
    button: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 10,
        width: '50%',
        height: 60,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    selectedButton: {
        backgroundColor: '#007bff',
    },
    header: {
        // width:'100%',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 20,
        top: 30
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        top: 20
    },
    radioButton: {
        width: 28,
        height: 28,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#333', // Border color for unselected state
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 35,
    },
    radioText: {
        fontSize: 16,
        color: '#333', // Text color for unselected state
        fontWeight: 'bold',
        right: 25
    },
    selectedRadioButton: {
        borderColor: '#007AFF', // Border color for selected state
        backgroundColor: '#007bff',

    },
    selectedRadioText: {
        color: '#007AFF', // Text color for selected state
    },
    radioButtonWithText: {
        flexDirection: 'row', // To align text and radio button horizontally
        alignItems: 'center', // To vertically center-align text and radio button
    },
    brand: {
        padding: 20,
        marginVertical: -100,
        borderRadius: 10,
        elevation: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        width: '100%', // Make it responsive to the width of the screen
    },
    // If you have images inside your brand component, you can style them like this
    brandImage: {
        width: '100%', // Full width of the container
        height: undefined, // Height will be calculated based on aspect ratio
        aspectRatio: 1, // Define your aspect ratio for the image
        marginBottom: 15, // Space below the image
    },
    searchBox: {
        minWidth: '100%',
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 16,
        top: 40
    },
    submitButton: {
        backgroundColor: '#007bff', // Primary color for the button
        padding: 15, // Padding inside the button
        borderRadius: 10, // Rounded corners
        alignItems: 'center', // Center the text inside the button
        justifyContent: 'center', // Center vertically
        marginTop: 20, // Margin at the top,
        height: 50,
        top: 40
    },
    submitButtonText: {
        color: 'white', // Text color
        fontSize: 16, // Font size
        fontWeight: 'bold', // Font weight
    },
    tabBar: {
        backgroundColor: '#fff', // Background color of the tab bar
        borderTopColor: 'transparent', // Border top color
        height: 60, // Height of the tab bar
        margin: 50
    },
    tabBarLabel: {
        fontSize: 12, // Font size of the tab label
        marginBottom: 5, // Margin bottom for the label
    },
});