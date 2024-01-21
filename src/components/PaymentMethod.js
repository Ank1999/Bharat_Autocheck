import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import logo from '../../assets/Car.jpg'
// Mock data for the list items

export default function PaymentMethod() {

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.header}>Select Payment Method</Text>

                {/* Recommended Section */}
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Recommended</Text>
                    <TouchableOpacity style={styles.paymentOption}>
                        <Image source={logo} style={styles.paymentIcon} />
                        <Text style={styles.paymentText}>Hdfc Visa Card</Text>
                        <Text style={styles.paymentDetail}>**** 9048</Text>
                        <View style={styles.paymentOptionBorder} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.paymentOption}>
                        <Image source={logo} style={styles.paymentIcon} />
                        <Text style={styles.paymentText}>Google Pay UPI</Text>
                        <Image source={{ logo }} style={styles.chevron} />
                    </TouchableOpacity>
                </View>

                {/* UPI Section */}
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>UPI</Text>
                    <TouchableOpacity style={styles.paymentOption}>
                        <Image source={logo} style={styles.paymentIcon} />
                        <Text style={styles.paymentText}>Paytm UPI</Text>
                        {/* <Text style={styles.paymentDetail}>**** 9048</Text> */}
                        <View style={styles.paymentOptionBorder} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.paymentOption}>
                        <Image source={logo} style={styles.paymentIcon} />
                        <Text style={styles.paymentText}>PhonePe UPI</Text>
                        <View style={styles.paymentOptionBorder} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.paymentOption}>
                        <Image source={logo} style={styles.paymentIcon} />
                        <Text style={styles.paymentText}>Add new UPI ID</Text>

                    </TouchableOpacity>

                </View>

                {/* Wallets Section */}
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Wallets</Text>
                    <TouchableOpacity style={styles.paymentOption}>
                        <Image source={logo} style={styles.paymentIcon} />
                        <Text style={styles.paymentText}>Paytm</Text>
                        <View style={styles.paymentOptionBorder} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.paymentOption}>
                        <Image source={logo} style={styles.paymentIcon} />
                        <Text style={styles.paymentText}>Mobikwik</Text>
                        <Image source={{ logo }} style={styles.chevron} />
                    </TouchableOpacity>
                </View>

                {/* pay on delivery Section */}
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Pay On Delivery</Text>
                    <TouchableOpacity style={styles.paymentOption}>
                        <Image source={logo} style={styles.paymentIcon} />
                        <Text style={styles.paymentText}>Cash on Delivery</Text>
                        <Image source={{ logo }} style={styles.chevron} />
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        
    },
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        marginBottom:100
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'center',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        marginHorizontal: 16,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: 'hidden',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        // backgroundColor: '#f7f7f7', // Light gray for section title background
    },
    paymentOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: 'white', // Ensure the background color matches the card
        marginBottom: 1, // If you want to separate items by 1px
    },
    paymentOptionBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        position: 'absolute',
        left: 55,
        right: 0,
        bottom: 0,
    },
    paymentIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    paymentText: {
        flex: 1,
        marginLeft: 15,
        fontSize: 16,
        color: '#333333',
    },
    paymentDetail: {
        color: '#888888',
    },
    chevron: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: '#cccccc',
    },
    // Add more styles as needed for your layout
});
