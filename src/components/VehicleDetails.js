import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import bike from '../../assets/Bikes.png'
import car from '../../assets/carr.png'
import repair from '../../assets/CarRepair.png'
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import AppHeader from '../Global/AppHeader'


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
    const handleBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>

            {/* <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <AntDesign name="left" style={styles.backIcon} size={24} color="black" />
            </TouchableOpacity> */}

            <AppHeader showBackButton={true}
                onBackButtonPress={() => navigation.goBack()} />

            <Text style={styles.header}>Vehicle Additional Details</Text>

            <View style={styles.card}>
                <View style={styles.iconWrapper}>
                    {(vehicleType === 'Car') && (
                        <Image source={car} style={styles.icon} />
                    )}
                    {(vehicleType === 'Bike') && (
                        <Image source={bike} style={styles.icon} />
                    )}
                    {(vehicleType === 'Mechanic') && (
                        <Image source={repair} style={styles.icon} />
                    )}
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>{vehicleNumber}</Text>
                    {(vehicleType === 'Car' || vehicleType === 'Bike') && (
                        <Text style={styles.subtitle}>{vehicleType}</Text>
                    )}
                </View>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Brand"
                value={brand}
                onChangeText={setBrand}
            />

            <TextInput
                style={styles.input}
                placeholder="Model"
                value={model}
                onChangeText={setModel}
            />

            <TextInput
                style={styles.input}
                placeholder="Make"
                value={year}
                onChangeText={setYear}
            />

            <TextInput
                style={styles.input}
                placeholder="Chasis No."
                value={model}
                onChangeText={setChasis}
            />

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
        // backgroundColor: '#FFFFFF', // White background
    },
    backButton: {
        position: 'absolute',
        top: 70, // Adjust as needed
        left: 16, // Adjust as needed
    },
    backIcon: {
        width: 30, // Adjust as needed
        height: 30, // Adjust as needed
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
        color: 'balck', // Saffron color
    },
    input: {
        width: '90%',
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: '#007bff', // Primary color for the button
        padding: 15, // Padding inside the button
        borderRadius: 10, // Rounded corners
        alignItems: 'center', // Center the text inside the button
        justifyContent: 'center', // Center vertically
        marginTop: 20, // Margin at the top,
        width: '90%',
        height: 50
    },
    buttonText: {
        color: 'white', // Text color
        fontSize: 16, // Font size
        fontWeight: 'bold', // Font weight
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#FfFfFf',
        borderRadius: 10,
        padding: 16,
        margin: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '90%',
        height: 70,
        bottom:10
    },
    iconWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    icon: {
        width: 50,
        height: 60,
        backgroundColor: 'transparent',
    },
    textWrapper: {
        marginLeft: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    subtitle: {
        fontSize: 14,
        color: '#6D6D6D',
    },
});
