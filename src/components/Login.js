import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Login({navigation}) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const [isOtpSent, setIsOtpSent] = useState(false);

    const handleSendOrVerifyOtp = () => {
        if (isOtpSent) {
            // Verify OTP code
            const otpCode = otp.join('');
            console.log('Verify OTP: ', otpCode);
            // Here you would verify the OTP against your backend
            Alert.alert('OTP Verification', 'The OTP verification is successful!', [{ text: 'OK' }]);
            navigation.navigate('HomeScreen'); 
        } else {
            // Send OTP code
            console.log('Send OTP to: ', phoneNumber);
            // Here you would send the OTP to the user's phone number via your backend
            setIsOtpSent(true);
        }
    };

    // Create individual refs for each OTP input
    const firstInputRef = useRef(null);
    const secondInputRef = useRef(null);
    const thirdInputRef = useRef(null);
    const fourthInputRef = useRef(null);

    // Array of refs for convenience in handling focus
    const otpInputRefs = [firstInputRef, secondInputRef, thirdInputRef, fourthInputRef];

    const handleOtpChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Focus next input on entering a digit
        if (text && index < otp.length - 1) {
            otpInputRefs[index + 1].current.focus();
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter your phone number</Text>
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                editable={!isOtpSent} // Make it non-editable after sending OTP
            />
            {isOtpSent && (
                <View style={styles.otpInputsContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={otpInputRefs[index]}
                            style={styles.otpInput}
                            keyboardType="number-pad"
                            maxLength={1}
                            onChangeText={(text) => handleOtpChange(text, index)}
                            value={digit}
                        />
                    ))}
                </View>
            )}
            <TouchableOpacity style={styles.button} onPress={handleSendOrVerifyOtp}>
                <Text style={styles.buttonText}>{isOtpSent ? 'Verify OTP' : 'Send OTP'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    otpInputsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    otpInput: {
        width: '22%',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        fontSize: 18,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10, // You can reduce this value if needed
    },
    otpInputsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 10, // Reduced the margin at the top of OTP inputs
        marginBottom: 20, // Adjust as needed
    },
    otpInput: {
        width: '22%',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        fontSize: 18,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#34C759',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20, // Adjust this margin to control space above the button
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});
