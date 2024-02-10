import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import logo from '../../assets/Bike.png'
import AppHeader from './AppHeader';


const brandsData = [
    {
        id: 1,
        name: 'Audi',
        logo: require('../../assets/Bike.png'), // replace with actual image path
    },
    {
        id: 2,
        name: 'Honda',
        logo: require('../../assets/Bike.png'), // replace with actual image path
    },
    {
        id: 3,
        name: 'Maruti',
        logo: require('../../assets/Bike.png'), // replace with actual image path
    },
    {
        id: 4,
        name: 'Kia',
        logo: require('../../assets/Bike.png'), // replace with actual image path
    },
    {
        id: 4,
        name: 'Hyundai',
        logo: require('../../assets/Bike.png'), // replace with actual image path
    },
    // Add more mechanics as needed
];

const modelsData = {
    'Audi': [
        {
            id: 1,
            name: 'Audi A3',
            logo: require('../../assets/Bike.png'), // replace with actual image path
        },
        {
            id: 2,
            name: 'Audi A4',
            logo: require('../../assets/Bike.png'), // replace with actual image path
        },
        // ... more Audi models
    ],
    'Honda': [
        {
            id: 1,
            name: 'Honda Civic',
            logo: require('../../assets/Bike.png'), // replace with actual image path
        },
        {
            id: 2,
            name: 'Honda Accord',
            logo: require('../../assets/Bike.png'), // replace with actual image path
        },
        // ... more Honda models
    ],
    'Maruti': [
        {
            id: 1,
            name: 'Maruti Swift',
            logo: require('../../assets/Bike.png'), // replace with actual image path
        },
        {
            id: 2,
            name: 'Maruti Baleno',
            logo: require('../../assets/Bike.png'), // replace with actual image path
        },
        // ... more Maruti models
    ],
    'Kia': [
        {
            id: 1,
            name: 'Kia Seltos',
            logo: require('../../assets/Bike.png'), // replace with actual image path
        },
        {
            id: 2,
            name: 'Kia Sonet',
            logo: require('../../assets/Bike.png'), // replace with actual image path
        },
        // ... more Kia models
    ],
    'Hyundai': [
        {
            id: 1,
            name: 'Hyundai i20',
            logo: require('../../assets/Bike.png'), // replace with actual image path
        },
        {
            id: 2,
            name: 'Hyundai Creta',
            logo: require('../../assets/Bike.png'), // replace with actual image path
        },
        // ... more Hyundai models
    ],
    // ... add more brands and models as needed
};

const Brand = ({ onBrandSelect, navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (query) => {
        setSearchQuery(query);
        // Add search filtering logic if needed
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <AppHeader showBackButton={true}
                onBackButtonPress={() => navigation.goBack()} />
            <Text style={styles.header}>Select Your Brand</Text>
            <TextInput
                style={styles.searchBox}
                placeholder="Search by Car Model or Brand"
                onChangeText={handleSearchChange}
                value={searchQuery}
            />
            <View style={styles.gridContainer}>
                {brandsData.map((brand) => (
                    <TouchableOpacity
                        key={brand.id}
                        style={styles.logoContainer}
                        onPress={() => onBrandSelect(brand)}
                    >
                        <Image source={brand.logo} style={styles.logo} />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20, // Add padding to match the image's spacing  
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20, // Only bottom margin is needed according to the image
        top: 100
    },
    searchBox: {
        height: 60,
        width: '100%', // Make the search box full-width
        // backgroundColor: '#f2f2f2', // Light grey background color for the search box
        borderRadius: 10,
        paddingHorizontal: 15, // Horizontal padding
        fontSize: 16,
        marginBottom: 20, // Add margin below the search box
        borderWidth: 1, // Adjust border width as needed
        borderColor: 'black',
        top: 120

    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        top: 150,
        backgroundColor: 'gray',
        justifyContent: 'space-between'
    },
    logoContainer: {
        margin: 10,
        width: 70, // Adjust the size of the logo container if needed
        height: 70, // Adjust the size of the logo container if needed
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        aspectRatio: 4 / 3,
        objectFit: 'contain',
    },
    // ... any other styles you need
});

export default Brand;