import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const VehicleDetails = ({ route, navigation }) => {
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [chasisNo, setChasis] = useState('');
    const [engineNo, setEngine] = useState('');

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
        alert('Vehicle Details Saved:', { vehicleNumber, model, year, vehicleType });
        navigation.navigate('EstimationDetails');

    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Vehicle Details</Text>

            {/* <Text style={styles.title}>Enter Vehicle Number:</Text> */}
            <TextInput
                style={styles.input}
                placeholder="Vehicle Number"
                value={vehicleNumber}
                onChangeText={setVehicleNumber}
                editable={false}
            />

            {/* <Text style={styles.title}>Enter Vehicle Type:</Text> */}
            <TextInput
                style={styles.input}
                placeholder="Vehicle Type"
                value={vehicleType}
                onChangeText={setVehicleType}
                editable={false}
            />

            {/* <Text style={styles.title}>Enter Brand:</Text> */}
            <TextInput
                style={styles.input}
                placeholder="Brand"
                value={brand}
                onChangeText={setBrand}
            />

            {/* <Text style={styles.title}>Enter model:</Text> */}
            <TextInput
                style={styles.input}
                placeholder="Model"
                value={model}
                onChangeText={setModel}
            />

            {/* <Text style={styles.title}>Enter Make:</Text> */}
            <TextInput
                style={styles.input}
                placeholder="Make"
                value={year}
                onChangeText={setYear}
            />

            {/* <Text style={styles.title}>Enter Chasis No:</Text> */}
            <TextInput
                style={styles.input}
                placeholder="Chasis No."
                value={model}
                onChangeText={setChasis}
            />

            {/* <Text style={styles.title}>Enter Engine No:</Text> */}
            <TextInput
                style={styles.input}
                placeholder="Engine No."
                value={year}
                onChangeText={setEngine}
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
    title: {
        fontSize: 18,
        marginBottom: 5,
        textAlign:'left',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        alignSelf:'flex-start',
        paddingLeft:20
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
