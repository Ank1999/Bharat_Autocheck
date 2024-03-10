import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';

const PaymentScreen = () => {
    // State for Picker and TextInput would go here
    const [selectedCountry, setSelectedCountry] = useState('us');
    const [zipCode, setZipCode] = useState('');
    const [isCardSaved, setIsCardSaved] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Choose a payment method</Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.paymentOptionsContainer}
                style={styles.paymentOptionsScrollView}
            >
                <TouchableOpacity style={styles.paymentOption}>
                    <Text style={styles.paymentOptionText}>Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.paymentOption}>
                    <Text style={styles.paymentOptionText}>iDEAL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.paymentOption}>
                    <Text style={styles.paymentOptionText}>SEPA Debit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.paymentOption}>
                    <Text style={styles.paymentOptionText}>SEPA Debit</Text>
                </TouchableOpacity>
            </ScrollView>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Card information</Text>
                <View style={styles.cardInputContainer}>
                    <TextInput
                        placeholder="Card number"
                        keyboardType="number-pad"
                        style={styles.cardNumberInput}
                    />
                    <View style={styles.expiryCvcContainer}>
                        <TextInput
                            placeholder="MM/YY"
                            keyboardType="number-pad"
                            style={[styles.expiryInput, styles.flex]}
                        />
                        <TextInput
                            placeholder="CVC"
                            keyboardType="number-pad"
                            style={[styles.cvcInput, styles.flex]}
                        />
                    </View>
                </View>

                <Text style={styles.inputLabel}>Country or region</Text>
                <View style={styles.cardInputContainer}>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.pickerText}>{selectedCountry === 'us' ? 'United States' : selectedCountry}</Text>
                        {/* <Image source={require('./path-to-dropdown-icon.png')} style={styles.dropdownIcon} /> */}
                    </View>
                    <View style={styles.zipContainer}>
                        <TextInput
                            value={zipCode}
                            onChangeText={setZipCode}
                            placeholder="ZIP"
                            style={styles.zipInput}
                        />
                    </View>
                </View>

                <View style={styles.checkboxRow}>
                    <Checkbox
                        value={isCardSaved}
                        onValueChange={setIsCardSaved}
                        style={styles.checkbox}
                    />
                    <Text style={styles.checkboxLabel}>Save this card for future powdur payments</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 60
    },
    header: {
        padding: 20,
        // alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    paymentOptionsContainer: {
        paddingHorizontal: 20,
    },
    paymentOptionsScrollView: {
        maxHeight: 100, // Set a max height if needed
    },
    paymentOption: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 110,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 2,
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 1,
        marginHorizontal: 5,
        right: 8
    },
    inputLabel: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: '#000',
        paddingBottom: 10,
        paddingHorizontal: 0,
    },
    inputContainer: {
        // backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    cardInputContainer: {
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        padding: 16,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 1,
        elevation: 2,
    },
    cardNumberInput: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
        paddingVertical: 10,
    },
    expiryCvcContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    zipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    expiryInput: {
        borderRightWidth: 1,
        borderRightColor: '#E6E6E6',
        paddingRight: 30,
    },
    cvcInput: {
        paddingLeft: 30,
    },
    flex: {
        flex: 1,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputSmall: {
        flex: 1,
        marginHorizontal: 5, 
    },
    picker: {
        backgroundColor: '#f7f7f7',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 5,
        padding: 15,
        marginBottom: 10,
        fontSize: 16,
    },
    saveCardCheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        // Add more styles for the checkbox icon and alignment
    },
    continueButton: {
        backgroundColor: '#4a90e2', // Replace with your button color
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        paddingBottom: 10,
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 15,
    },
    pickerText: {
        fontSize: 16,
        color: '#000',
    },
    picker: {
        backgroundColor: '#f7f7f7',
        borderRadius: 8,
        marginBottom: 10,
    },
    dropdownIcon: {
        width: 10,
        height: 10,
        // Add other styles for the dropdown icon
    },
    zipInput: {
        fontSize: 16,
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        marginRight: 8,
    },
    checkboxLabel: {
        fontSize: 16,
    },
});

export default PaymentScreen;
