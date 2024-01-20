import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react'
import bike from '../../assets/Bike.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const AppHeader = ({ handleProfileClick }) => {
    return (
        <View style={styles.headerBar}>
            <Text style={styles.headerTitle}>Welcome, Ank</Text>
            <TouchableOpacity style={styles.profileButton} onPress={handleProfileClick}>
                <FontAwesomeIcon icon={faUser} size={22} style={styles.profileIcon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerBar: {
        position: 'absolute', // Positioning it absolutely
        top: 50, // Align it to the top of the screen
        left: 0, // Align it to the left of the screen
        right: 0, // Stretch it to the right of the screen
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        // backgroundColor: 'cyan',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10, // Add margin to the right of the title
    },
    profileButton: {
        // Styling for the profile button
    },
    profileIcon: {
        // fontSize:'40',
        color: 'red',
        margin: 10
    },
});

export default AppHeader;