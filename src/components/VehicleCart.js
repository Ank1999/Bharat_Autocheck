import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as WebBrowser from 'expo-web-browser';

const windowWidth = Dimensions.get('window').width;

const CartItem = ({ item, onDelete }) => {
    return (
        <View style={styles.cartItem}>
            <View style={styles.itemImageContainer}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
            </View>
            <View style={styles.itemDetails}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemPrice}>€{item.price}</Text>
            </View>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => onDelete(item.id)}
            >
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

const handlePayment =  async () => {
    const paymentUrl = 'https://sandbox.cashfree.com/pg/view/upi/dsloo6l.session_DsMCzBzZhoAmVCnJr_Wy8j8w6PstOsT8PdvO-tOUczEsZT1izuV_zSCTJA-1Q_sWyq9hlW4GsVQppU_VIe-X_3SFMF1ESpe3jJNqmDTZyOA3.4ed1c1a1-1b0c-414b-bb3e-53d5fe83e0ad';
    // await WebBrowser.openBrowserAsync(paymentUrl);

    const result = await WebBrowser.openBrowserAsync(paymentUrl);

    console.log("res ")
    console.log("res ::: ",result)

}

const VehicleCart = ({ route, navigation }) => {

    const [cartItems, setCartItems] = useState(route.params?.cartItems || []);

    const emptyCartImage = require('../../assets/cart.png'); // Replace with your empty cart image path

    const handleDeleteItem = (itemId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
    };

    const renderFooter = () => {
        if (cartItems.length === 0) {
            return null; // Don't render anything if cart is empty
        }
        const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
        const shipping = subtotal > 0 ? 'Free' : '€0.00';
        const total = subtotal;

        return (
            <View style={styles.footer}>
                <View style={styles.summaryLine}>
                    <Text style={styles.summaryText}>Subtotal</Text>
                    <Text style={styles.summaryPrice}>€{subtotal.toFixed(2)}</Text>
                </View>
                <View style={styles.summaryLine}>
                    <Text style={styles.summaryText}>Shipping</Text>
                    <Text style={styles.summaryPrice}>{shipping}</Text>
                </View>
                <View style={styles.totalLine}>
                    <Text style={styles.totalText}>Total</Text>
                    <Text style={styles.totalPrice}>€{total.toFixed(2)}</Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CartItem item={item} onDelete={handleDeleteItem} />
                )}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Image source={emptyCartImage} style={styles.emptyImage} />
                        <Text style={styles.emptyText}>Your cart is empty</Text>
                    </View>
                }
                ListFooterComponent={renderFooter}
                contentContainerStyle={cartItems.length === 0 ? styles.emptyListContainer : styles.listContainer}
            />
            <TouchableOpacity
                style={[styles.checkoutButton, cartItems.length === 0 && styles.disabledCheckoutButton]}
                disabled={cartItems.length === 0}
                onPress={handlePayment} >
                <Text style={styles.checkoutButtonText} >Checkout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    cartItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 3,
    },
    itemImageContainer: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
    },
    itemImage: {
        width: 60,
        height: 60,
    },
    itemDetails: {
        flex: 1,
        marginLeft: 16,
        justifyContent: 'center',
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
    },
    itemPrice: {
        fontSize: 16,
        color: '#666',
    },
    // Footer styles
    footer: {
        paddingVertical: 10,
        paddingHorizontal: 16,
    },
    summaryLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    summaryText: {
        fontSize: 16,
        color: '#333',
    },
    summaryPrice: {
        fontSize: 16,
        color: '#333',
    },
    totalLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    totalText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    totalPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    emptyImage: {
        width: windowWidth * 0.7,
        height: windowWidth * 0.7,
        resizeMode: 'contain',
    },
    emptyText: {
        fontSize: 20,
        color: '#aaa',
        marginTop: 16,
    },
    checkoutButton: {
        backgroundColor: '#4CAF50', // active button color
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 16,
    },
    disabledCheckoutButton: {
        backgroundColor: '#ccc', // disabled button color
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    deleteButton: {
        // Style for the delete button (e.g., padding, backgroundColor)
        padding: 8,
        backgroundColor: 'red',
        borderRadius: 5,
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default VehicleCart;