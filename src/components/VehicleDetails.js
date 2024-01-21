import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import bike from '../../assets/Bike.png'


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
            <Text style={styles.header}>Vehicle Additional Details</Text>

            {/* <Text style={styles.title}>Enter Vehicle Number:</Text> */}
            {/* <TextInput
                style={styles.input}
                placeholder="Vehicle Number"
                value={vehicleNumber}
                onChangeText={setVehicleNumber}
                editable={false}
            /> */}

            {/* <Text style={styles.title}>Enter Vehicle Type:</Text> */}
            {/* <TextInput
                style={styles.input}
                placeholder="Vehicle Type"
                value={vehicleType}
                onChangeText={setVehicleType}
                editable={false}
            /> */}

            
            {/* <View style={styles.card}>
                <Text style={styles.cardTitle}>Vehicle Number</Text>
                <Text style={styles.cardValue}>{vehicleNumber}</Text>
            </View>

            {/* Vehicle Type Card */}
            {/* <View style={styles.card}>
                <Text style={styles.cardTitle}>Vehicle Type</Text>
                <Text style={styles.cardValue}>{vehicleType}</Text>
            </View>  */}


            <View style={styles.card}>
                <Image source={{bike}} style={styles.icon} />
                <View style={styles.info}>
                    <Text style={styles.cardTitle}>Vehicle Number</Text>
                    <Text style={styles.cardValue}>{vehicleNumber}</Text>
                </View>
            </View>

            {/* Vehicle Type Card */}
            <View style={styles.card}>
                <Image source={{bike}} style={styles.icon} />
                <View style={styles.info}>
                    <Text style={styles.cardTitle}>Vehicle Type</Text>
                    <Text style={styles.cardValue}>{vehicleType}</Text>
                </View>
            </View>


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
        textAlign: 'left',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        paddingLeft: 20
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FF9933', // Saffron color
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    info: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#444',
    },
    cardValue: {
        fontSize: 16,
        color: '#555',
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
