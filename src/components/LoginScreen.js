import React, { useState, createRef } from 'react';
import { View, Text, TextInput, Button, Modal, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import AuthService from '../../services/AuthService';
import { Alert } from "react-native";


const LoginScreen = ({ visible, onClose, navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const otpTextInput = new Array(6).fill(0).map(() => createRef());


    const handleSubmitOTP = async () => {
        setOtp(new Array(6).fill(''));
        setShowOtpInput(true);
        try {
            const response = await AuthService.signupOtp(phoneNumber);
        } catch (error) {
            // Handle the error, maybe show an error message to the user
        }
    };

    const verifyOtp = async () => {
        const otpCode = otp.join('');
        
        try {
            const isVerified = await AuthService.verifyOtp(phoneNumber, otpCode);
            console.log("loginid.......vvvv..", isVerified)
            if (isVerified) {
                // OTP verified, navigate to the next screen or update state
                Alert.alert('Login Succesfuuly', 'you are logged in successfully !!');
                // navigation.navigate('Login');
                onClose();
            } else {
                // OTP verification failed, handle accordingly
                console.log('OTP verification failed.');
            }
        } catch (error) {
            // Handle the error, maybe show an error message to the user
            console.log('Error during OTP verification:', error);
        }
    };

    const handleOtpChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Auto-focus next input field
        if (text && index < 5) {
            otpTextInput[index + 1].current.focus();
        }
    };

    const goToPhoneNumberInput = () => {
        setShowOtpInput(false);
        setOtp(new Array(6).fill(''));
        setPhoneNumber('');
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.modalContainer}>
                        <ScrollView contentContainerStyle={styles.scrollViewContent}>
                            <TouchableWithoutFeedback>

                                <View style={styles.modalContent}>
                                    {!showOtpInput ? (
                                        <>
                                            <View style={styles.iconContainer}>
                                                {/* You can import and place your car icon here */}
                                            </View>
                                            <Text style={styles.title}>Please Login/Signup to proceed</Text>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={styles.input}
                                                    keyboardType="phone-pad"
                                                    placeholder="+91"
                                                    value={phoneNumber}
                                                    onChangeText={(text) => {
                                                        const formattedNumber = text.startsWith('+91') ? text : `+91${text}`;
                                                        setPhoneNumber(formattedNumber);
                                                    }}
                                                // You can add onChangeText to handle the input change
                                                />
                                            </View>
                                            <TouchableOpacity style={styles.button} onPress={handleSubmitOTP}>
                                                <Text style={styles.buttonText}>GET OTP</Text>
                                            </TouchableOpacity>
                                        </>
                                    ) : (
                                        <>
                                            <TouchableOpacity onPress={goToPhoneNumberInput} style={styles.backButton}>
                                                <Text style={styles.backButtonText}>{"<"} </Text>
                                            </TouchableOpacity>
                                            <Text style={styles.otpText}>Enter 6 digit OTP sent on {phoneNumber}</Text>
                                            <View style={styles.otpContainer}>
                                                {otp.map((digit, index) => (
                                                    <TextInput
                                                        key={index}
                                                        style={styles.otpInput}
                                                        keyboardType="number-pad"
                                                        maxLength={1}
                                                        onChangeText={(text) => handleOtpChange(text, index)}
                                                        value={digit}
                                                        ref={otpTextInput[index]}
                                                    />
                                                ))}
                                            </View>
                                            <TouchableOpacity style={styles.button} onPress={verifyOtp}>
                                                <Text style={styles.buttonText}>VERIFY</Text>
                                            </TouchableOpacity>
                                        </>
                                    )}
                                    <Text style={styles.infoText}>Sign in to access your orders, offers & Wallet.</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </ScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        // alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    iconContainer: {
        // Add styles for your icon container here
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        alignSelf: 'flex-start'
    },
    inputContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'grey',
        marginVertical: 10,
        width: '100%',
        height: 55,
        borderRadius: 5
    },
    input: {
        flex: 1,
        padding: 10,
    },
    button: {
        backgroundColor: 'red',
        padding: 15,
        width: '100%',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
        height: 50
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    backButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    otpText: {
        fontSize: 16,
        marginBottom: 20,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    otpInput: {
        width: '14%', // Adjust the width as necessary
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        textAlign: 'center',
        margin: 5,
        borderRadius: 5
    },

    infoText: {
        fontSize: 14,
        color: 'grey',
        marginTop: 10,
        marginVertical: 15,
        alignSelf: 'flex-start'

    },
});

export default LoginScreen;
