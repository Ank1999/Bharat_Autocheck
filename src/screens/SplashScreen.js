import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import LoginScreen from '../components/LoginScreen';

const SplashScreen = ({navigation}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const numberOfSlides = 4;
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / Dimensions.get('window').width);
        setCurrentIndex(currentIndex);
    };

    const handleLogin = () => {
        // navigation.navigate('Login');
        navigation.navigate('PaymentScreen');
    }

    const handleButton = () => {
        navigation.navigate('BottomTab');
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView
                style={styles.container}
                horizontal
                pagingEnabled
                onMomentumScrollEnd={handleScroll}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.slide}>
                    {/* <Image source={require('../../assets/BG.png')} style={styles.backgroundImage} /> */}
                    <Image source={require('../../assets/Image.png')} style={styles.carImage} />
                    <Text style={styles.header}>Find your perfect inspection!</Text>
                    <Text style={styles.subHeader}>100+ Services, Repairs & Products</Text>

                </View>
                <View style={styles.slide}>
                    {/* <Image source={require('../../assets/BG.png')} style={styles.backgroundImage} /> */}
                    <Image source={require('../../assets/Img2.png')} style={styles.carImage} />
                    <Text style={styles.header}>Your Car Service, At Your Fingertips!</Text>
                    <Text style={styles.subHeader}>Superfast Booking</Text>

                </View>
                <View style={styles.slide}>
                    {/* <Image source={require('../../assets/BG.png')} style={styles.backgroundImage} /> */}
                    <Image source={require('../../assets/Img3.png')} style={styles.carImage} />
                    <Text style={styles.header}>Live Updates!</Text>
                    <Text style={styles.subHeader}>Dedicated Service Buddy At Your Service!</Text>

                </View>
                <View style={styles.slide}>
                    {/* <Image source={require('../../assets/BG.png')} style={styles.backgroundImage} /> */}
                    <Image source={require('../../assets/Img4.png')} style={styles.carImage} />
                    <Text style={styles.header}>Stay Home, Stay Safe</Text>
                    <Text style={styles.subHeader}>Doorstep Pickup & Delivery</Text>
                </View>
            </ScrollView>

            <View style={styles.dotsContainer}>
                {Array.from({ length: numberOfSlides }).map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentIndex === index ? styles.activeDot : styles.inactiveDot,
                        ]}
                    />
                ))}
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => {handleButton()}}>
                    <Text style={styles.buttonText}>SELECT YOUR CAR</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>
                    Already have an account?  {' '}
                    <Text style={styles.loginLink} onPress={() => setShowLoginModal(true)}>
                        Login
                    </Text>
                </Text>

                <LoginScreen visible={showLoginModal} onClose={() => setShowLoginModal(false)} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        position: 'relative', // This allows absolute positioning for children
    },
    container: {
        flex: 1,
    },
    slide: {
        width: Dimensions.get('window').width,
        height: 640,
        alignItems: 'center',
        justifyContent: 'center',
    },
    carImage: {
        width: 400, // set the width according to your image
        height: 300, // set the height according to your image
        resizeMode: 'cover',
        marginBottom: 20,
        top: 30
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        width: '80%',
        top: 105
    },
    subHeader: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
        top: 120
    },

    dotsContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 170, // Adjust this value as needed to position the dots
        alignSelf: 'center',
    },
    dot: {
        height: 14, // Size of the dot
        width: 14, // Size of the dot
        borderRadius: 7, // Half the size of the dot to make it circular
        marginHorizontal: 8, // Spacing between dots
        borderWidth: 1, // Width of the border
        borderColor: 'gray', // Color of the border (can be different from the dot color)
    },
    activeDot: {
        height: 16,
        width: 16,
        borderRadius: 7.8,
        backgroundColor: 'gray',
        borderWidth: 1, // Width of the border
        borderColor: 'gray', // Color of the border (can be different from the dot color)
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 100, 
        alignSelf: 'center',
        width: '87%'
    },
    button: {
        backgroundColor: '#FF6347', // your button color
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        height: 55
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
   loginContainer: {
    bottom: 80, 
  },
  loginText: {
    fontSize: 17, 
    textAlign:'center',
  },
  loginLink: {
    color: '#FF6347',
    fontSize: 18, 
  },
});

export default SplashScreen;
