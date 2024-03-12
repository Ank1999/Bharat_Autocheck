import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView, Image } from 'react-native';
import PaymentMethod from '../components/PaymentMethod';
import logo from '../../assets/favicon.png'

const windowWidth = Dimensions.get('window').width;

const AppButton = ({ title, price, navigation, onPress }) => {

    const onCheckout = () => {
        navigation.navigate(page); // Use the name of the screen you want to navigate to
    };

    const onCheckoutPage = () => {
        navigation.navigate(PaymentMethod); // Use the name of the screen you want to navigate to
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.summaryContainer}>
                <Text style={styles.itemCountText}>{price}</Text>
                <TouchableOpacity onPress={onPress} style={styles.checkoutButton}>
                    <Text style={styles.checkoutButtonText}>{title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent',
    },
    summaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -2, 
        },
        shadowOpacity: 0.05, 
        shadowRadius: 2, 
        elevation: 3, 
    },
    itemCountText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',

    },
    checkoutButton: {
        backgroundColor: '#34C759',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 6,
        top:10

    },
    checkoutButtonText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export default AppButton;
