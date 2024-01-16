import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function VehicleDetails() {

    const [vehicleName, setVehicleName] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const handleSave = () => {
        // Add your logic to save or handle the vehicle details
        alert('Vehicle Details Saved:', { vehicleName, model, year, vehicleType });
        // You can perform further actions like making an API call or updating state.
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Vehicle Details</Text>

            {/* Vehicle Name */}
            <TextInput
                style={styles.input}
                placeholder="Vehicle Name"
                value={vehicleName}
                onChangeText={(text) => setVehicleName(text)}
            />

            {/* Model */}
            <TextInput
                style={styles.input}
                placeholder="Model"
                value={model}
                onChangeText={(text) => setModel(text)}
            />

            {/* Year */}
            <TextInput
                style={styles.input}
                placeholder="Year"
                value={year}
                onChangeText={(text) => setYear(text)}
            />

            {/* Vehicle Type */}
            <TextInput
                style={styles.input}
                placeholder="Vehicle Type"
                value={vehicleType}
                onChangeText={(text) => setVehicleType(text)}
            />

            {/* Save Button */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    saveButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
