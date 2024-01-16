import { StyleSheet, Text, View, Image, Animated, Easing } from 'react-native'
import pLogo from '../../assets/logo1.png'
import React, { useEffect, useRef } from 'react';
import HomeScreen from '../screens/HomeScreen';




export default function WelcomeScreen({ navigation }) {
    const bounceValue = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        // Bouncing animation configuration
        const bounceAnimation = Animated.sequence([
            Animated.timing(bounceValue, { toValue: 1.2, duration: 200, easing: Easing.linear, useNativeDriver: true }),
            Animated.spring(bounceValue, { toValue: 1, friction: 4, useNativeDriver: true }),
        ]);

        // Start the bouncing animation 2-3 times within 1 second
        Animated.loop(bounceAnimation, { iterations: 3 }).start();

        // Navigate to the Home screen after the animation completes
        const navigateToHome = () => {
            navigation.navigate('HomeScreen');
        };

        const timeout = setTimeout(navigateToHome, 200 * 3);

        // Cleanup the timeout on component unmount
        return () => clearTimeout(timeout);
    }, [navigation, bounceValue]);

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to Bharat AutoCheck</Text>
            <View style={styles.pLogo}>
                <Animated.Image
                    style={[styles.logo, { transform: [{ scale: bounceValue }] }]}
                    source={pLogo}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'red',
        // height:'100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20, // Adjust the spacing as needed
    },
    pLogo: {
        height: '50%',
        width: '80%',
        alignItems: 'center'
    },
    logo: {
        height: '100%',
        width: '100%'
    }
})