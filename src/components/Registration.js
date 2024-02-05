import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


export default function Registration() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSignUp = () => {
        navigation.navigate('Login');
    };


    return (
        // <ScrollView contentContainerStyle={styles.containerS}>
        // {/* Login Form */}
        <View style={styles.container}>
            <Text style={styles.header}>Create Account</Text>
            <Text style={styles.subheader}>Create an account so you can explore all the existing features</Text>

            <TextInput
                placeholder="Your Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
                style={styles.input}
            />
            <TextInput
                placeholder="Confirm Password"
                value={confirmPassword}
                secureTextEntry
                onChangeText={setConfirmPassword}
                style={styles.input}
            />

            <TouchableOpacity style={styles.signInButton} onPress={handleSignUp}>
                <Text style={styles.signInButtonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.newAccountSection}>
                <TouchableOpacity onPress={handleSignUp}>
                    <Text style={styles.createAccountText}>Already have an account</Text>
                </TouchableOpacity>
                <Text style={styles.orContinueWithText}>Or continue with</Text>
                <View style={styles.socialIcons}>
                    <View style={styles.iconContainer}>
                        <AntDesign name="google" size={24} color="black" />
                    </View>
                    <View style={styles.iconContainer}>
                        <FontAwesome name="facebook" size={24} color="black" />
                    </View>
                    <View style={styles.iconContainer}>
                        <AntDesign name="apple1" size={24} color="black" />
                    </View>
                </View>
            </View>
        </View>
        // </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f7',
        // marginTop: 200
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        bottom: 100,
        color: '#000',
    },
    subheader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        bottom: 80,
        textAlign: 'center'
    },
    input: {
        width: '100%',
        height: 60,
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#e4e4e7',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    signInButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 20,
    },
    signInButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    newAccountSection: {
        width: '100%',
        alignItems: 'center',
    },
    createAccountText: {
        color: '#007bff',
    },
    orContinueWithText: {
        marginVertical: 10,
        color: '#6c6c6c',
        top: 70
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // Add any other styling you need for this container
    },
    iconContainer: {
        backgroundColor: 'cyan',
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        top: 100
    },
});
