import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import AppHeader from '../Global/AppHeader';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import bg from '../../assets/bg.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Tab = createBottomTabNavigator();

export default function ({ navigation }) {

    const handleDetail = () => {
        navigation.navigate('DetailScreen');
    }

    const handleSearch = () => {
        navigation.navigate('CategoryScreen');
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Find Your</Text>
                <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size={22} />
                </TouchableOpacity>
            </View>

            <View style={styles.sectionHeader}>
                <View style={styles.headerUnderline} />
                <Text style={styles.sectionHeaderText}>Inspection</Text>
                <View style={styles.headerUnderline} />

            </View>

            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.cardColumn}>
                    {/* This is a simplified example of one card, you would repeat this structure for each card */}
                    <View style={styles.card}>
                        <TouchableOpacity onPress={handleDetail}>
                            <Image source={bg} style={styles.cardImage} />
                            <View style={styles.cardDetail}>
                                <Text style={styles.cardTitle}>Car</Text>
                                <Text style={styles.cardSubtitle}>Used</Text>
                            </View>
                            <TouchableOpacity style={styles.addButton}>
                                <Text style={styles.addButtonText}>Add</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={handleDetail}>
                            <Image source={bg} style={styles.cardImage} />
                            <View style={styles.cardDetail}>
                                <Text style={styles.cardTitle}>Bike</Text>
                                <Text style={styles.cardSubtitle}>used</Text>
                            </View>
                            <TouchableOpacity style={styles.addButton}>
                                <Text style={styles.addButtonText}>Add</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>


            <View style={styles.sectionHeader}>
                <View style={styles.headerUnderline} />
                <Text style={styles.sectionHeaderText}>Service</Text>
                <View style={styles.headerUnderline} />
            </View>

            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.cardColumn}>
                    {/* This is a simplified example of one card, you would repeat this structure for each card */}
                    <View style={styles.card}>
                        <TouchableOpacity onPress={handleDetail}>
                            <Image source={bg} style={styles.cardImage} />
                            <View style={styles.cardDetail}>
                                <Text style={styles.cardTitle}>General Service</Text>
                                <Text style={styles.cardSubtitle}>Detailed</Text>
                            </View>
                            <TouchableOpacity style={styles.addButton}>
                                <Text style={styles.addButtonText}>Add</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={handleDetail}>
                            <Image source={bg} style={styles.cardImage} />
                            <View style={styles.cardDetail}>
                                <Text style={styles.cardTitle}>Periodic Service</Text>
                                <Text style={styles.cardSubtitle}>Detailed</Text>
                            </View>
                            <TouchableOpacity style={styles.addButton}>
                                <Text style={styles.addButtonText}>Add</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={handleDetail}>
                            <Image source={bg} style={styles.cardImage} />
                            <View style={styles.cardDetail}>
                                <Text style={styles.cardTitle}>Major Service</Text>
                                <Text style={styles.cardSubtitle}>Detailed</Text>
                            </View>
                            <TouchableOpacity style={styles.addButton}>
                                <Text style={styles.addButtonText}>Add</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={handleDetail}>
                            <Image source={bg} style={styles.cardImage} />
                            <View style={styles.cardDetail}>
                                <Text style={styles.cardTitle}>Wheel Care</Text>
                                <Text style={styles.cardSubtitle}>Detailed</Text>
                            </View>
                            <TouchableOpacity style={styles.addButton}>
                                <Text style={styles.addButtonText}>Add</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={handleDetail}>
                            <Image source={bg} style={styles.cardImage} />
                            <View style={styles.cardDetail}>
                                <Text style={styles.cardTitle}>Insurance Claim</Text>
                                <Text style={styles.cardSubtitle}>Detailed</Text>
                            </View>
                            <TouchableOpacity style={styles.addButton}>
                                <Text style={styles.addButtonText}>Add</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={handleDetail}>
                            <Image source={bg} style={styles.cardImage} />
                            <View style={styles.cardDetail}>
                                <Text style={styles.cardTitle}>Suspension Work</Text>
                                <Text style={styles.cardSubtitle}>Detailed</Text>
                            </View>
                            <TouchableOpacity style={styles.addButton}>
                                <Text style={styles.addButtonText}>Add</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={handleDetail}>
                            <Image source={bg} style={styles.cardImage} />
                            <View style={styles.cardDetail}>
                                <Text style={styles.cardTitle}>Wheel Alignment</Text>
                                <Text style={styles.cardSubtitle}>Detailed</Text>
                            </View>
                            <TouchableOpacity style={styles.addButton}>
                                <Text style={styles.addButtonText}>Add</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={handleDetail}>
                            <Image source={bg} style={styles.cardImage} />
                            <View style={styles.cardDetail}>
                                <Text style={styles.cardTitle}>Denting & Painting</Text>
                                <Text style={styles.cardSubtitle}>Detailed</Text>
                            </View>
                            <TouchableOpacity style={styles.addButton}>
                                <Text style={styles.addButtonText}>Add</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </ScrollView >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 40
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        // Add search icon and rest of the header styling
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    searchButton: {
        // Style for your search button, including size, icons, etc.
    },
    sectionHeader: {
        padding: 20, // Add padding to create space around the text
        // backgroundColor: '#fff', // Set the background color if needed
        alignItems: 'flex-start', // Align text to the start of the view
    },
    sectionHeaderText: {
        fontSize: 22, // Increase the font size for the section title
        fontWeight: 'bold', // Make the text bold
        color: '#000', // Set the text color
        marginLeft: 10
    },
    headerUnderline: {
        height: 0.3,
        backgroundColor: 'black',
        width: '100%', // You can adjust the width as per your design needs
        marginTop: 15, // Adjust the space between the text and the line as needed
        marginBottom: 15
    },
    cardColumn: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        overflow: 'hidden',
        marginHorizontal: 10,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        width: 240, // set your desired card width
        elevation: 3, // only for Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 1 }, // iOS shadow
        shadowOpacity: 0.22, // iOS shadow
        shadowRadius: 2.22, // iOS shadow
        height: 150
    },
    cardImage: {
        width: '100%',
        height: '70%', // set your desired image height,
    },
    cardDetail: {
        padding: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    cardTitle: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 16,
    },
    cardSubtitle: {
        color: '#656565',
        fontSize: 12,
    },
    addButton: {
        // position: 'absolute',
        // top: 10,
        // right: 10,
        backgroundColor: '#000',
        borderRadius: 20,
        padding: 8,
        width: '30%',
        alignSelf: 'flex-end',
        margin: 5
    },
    addButtonText: {
        color: '#FFF',
        fontSize: 12,
        textAlign: 'center'
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 10,
        marginTop: 20,
    },
});