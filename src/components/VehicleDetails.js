import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const VehicleDetails = ({ route }) => {
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    useEffect(() => {
        if (route.params) {
            setVehicleNumber(route.params.vehicleNumber || '');
            setModel(route.params.model || '');
            setYear(route.params.year || '');
            setVehicleType(route.params.vehicleType || '');
        }
    }, [route.params]);

    // const { vehicleNumber, selectedVehicleType } = route.params;

    const handleSave = () => {
        alert('Vehicle Details Saved:', { vehicleName, model, year, vehicleType });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Vehicle Details</Text>

            <TextInput
                style={styles.input}
                placeholder="Vehicle Number"
                value={vehicleNumber}
                onChangeText={setVehicleNumber}
                editable={false}
            />

            <TextInput
                style={styles.input}
                placeholder="Vehicle Type"
                value={vehicleType}
                onChangeText={setVehicleType}
                editable={false}
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



            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>

        </View>
    );
};

export default VehicleDetails;


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
        width: '90%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 16,
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
