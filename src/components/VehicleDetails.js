import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function VehicleDetails({routes}) {
    const [vehicleName, setVehicleName] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const handleSave = () => {
        alert('Vehicle Details Saved:', { vehicleName, model, year, vehicleType });
    };

    return (
        <View style={styles.container}>
                    {console.log("",routes)}

            <Text style={styles.header}>Vehicle Details</Text>

            <TextInput
                style={styles.input}
                placeholder="Vehicle Name"
                value={vehicleName}
                onChangeText={setVehicleName}
            />

            <TextInput
                style={styles.input}
                placeholder="Model"
                value={model}
                onChangeText={setModel}
            />

            <TextInput
                style={styles.input}
                placeholder="Year"
                value={year}
                onChangeText={setYear}
            />

            <TextInput
                style={styles.input}
                placeholder="Vehicle Type"
                value={vehicleType}
                onChangeText={setVehicleType}
            />

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
        backgroundColor: '#FFFFFF', // White background
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FF9933', // Saffron color
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#138808', // Green border
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    saveButton: {
        backgroundColor: '#FF9933', // Saffron background
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF', // White text
        fontWeight: 'bold',
    },
});
