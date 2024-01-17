import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const AppButton = ({ title, page, navigation }) => {

    const onCheckout = () => {
        // Do any other work here before navigating
        navigation.navigate(page); // Use the name of the screen you want to navigate to
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.summaryContainer}>
                <Text style={styles.itemCountText}> 900 $</Text>
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
});
export default AppButton;
