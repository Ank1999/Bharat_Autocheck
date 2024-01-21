import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView, Image } from 'react-native';
import PaymentMethod from '../components/PaymentMethod';
import logo from '../../assets/favicon.png'

const windowWidth = Dimensions.get('window').width;

const AppButton = ({ title, page, navigation }) => {

    const onCheckout = () => {
        // Do any other work here before navigating
        navigation.navigate(page); // Use the name of the screen you want to navigate to
    };

    const onCheckoutPage = () => {
        // Do any other work here before navigating
        navigation.navigate(PaymentMethod); // Use the name of the screen you want to navigate to
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.summaryContainer}>
                {/* <Text onPress={onCheckoutPage} style={styles.itemCountTextß}> 900 $</Text> */}
                <TouchableOpacity onPress={onCheckoutPage} style={styles.buttonContainer}>
                    <View style={styles.textContainer}>
                        <Image source={logo} style={styles.icon} />
                        <Text style={styles.upperText}>PAY USING</Text>
                        <Image source={logo} style={styles.chevron} />
                    </View>
                    <Text style={styles.lowerText}>Google Pay UPI</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onCheckout} style={styles.checkoutButton}>
                    <Text style={styles.checkoutButtonText}>{title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: -220,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
    },
    summaryContainer: {
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    itemCountText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        // backgroundColor: '#F0F0F0',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    checkoutButton: {
        backgroundColor: '#34C759',
        width: 180,
        height: 50,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
        fontWeight: 500,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkoutButtonText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    buttonContainer: {
        backgroundColor: '#FFFFFF', // Replace with the color of your button background
        padding: 5, // Replace with your desired padding
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    icon: {
        width: 18, // Replace with the width of your icon
        height: 18, // Replace with the height of your icon
        resizeMode: 'contain',
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5, // Adjust the space between the icon and the text as needed
    },
    upperText: {
        fontSize: 10, // Replace with your desired font size
        // fontWeight: 'bold', // Replace with your desired font weight
        marginRight: 5, // Adjust the space between the text and the chevron as needed
    },
    chevron: {
        width: 12, // Replace with the width of your chevron icon
        height: 12, // Replace with the height of your chevron icon
        resizeMode: 'contain',
    },
    lowerText: {
        fontSize: 14, // Replace with your desired font size
        fontWeight: 'bold', // Replace with your desired font weight
        marginTop: 5, // Adjust the space between the upper text and lower text as needed
    },
});
export default AppButton;
