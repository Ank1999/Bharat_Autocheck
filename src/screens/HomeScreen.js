import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {

    const [searchText, setSearchText] = useState('');

    const handleSearchSubmit = () => {
        const vehicleDetails = {
            vehicleName: 'Car',
            model: 'XYZ',
            year: '2022',
            vehicleType: 'Sedan',
        };

        navigation.navigate('VehicleDetails', vehicleDetails);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Please Enter Vehicle Registration NO.</Text>

            {/* Search Box */}
            <TextInput
                style={styles.searchBox}
                placeholder="Enter your vehicle number"
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
            />

            {/* Submit Button */}
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