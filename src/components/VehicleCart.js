import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import { useCart } from '../Global/CartContext'; // Ensure the path is correct
import DateTimeScreen from './DateTimeScreen';
import AppHeader from '../Global/AppHeader';
import Toast from 'react-native-toast-message';
import AppButton from '../Global/AppButton';


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
            <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(item.id)}>
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

const VehicleCart = ({ route, navigation }) => {
    const { cartItems, removeFromCart } = useCart();
    const [showDateModal, setShowDateModal] = useState(false);

    const emptyCartImage = require('../../assets/cart.png');

    const subtotal = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
    const shipping = subtotal > 0 ? 'Free' : '€0.00';
    const total = subtotal;

    const handleDeleteItem = (itemId) => {
        removeFromCart(itemId);
        Toast.show({
            type: 'error',
            position: 'bottom',
            text1: 'Item removed from cart successfully!',
            visibilityTime: 4000,
            autoHide: true,
            bottomOffset: 50,
        });
    };


    const renderFooter = () => {
        if (cartItems.length === 0) {
            return null;
        }

        return (
            <View style={styles.footer}>
                <View style={styles.summaryLine}>
                    <Text style={styles.summaryText}>Subtotal</Text>
                    <Text style={styles.summaryPrice}>€{subtotal}</Text>
                </View>
                <View style={styles.summaryLine}>
                    <Text style={styles.summaryText}>Shipping</Text>
                    <Text style={styles.summaryPrice}>{shipping}</Text>
                </View>
                <View style={styles.totalLine}>
                    <Text style={styles.totalText}>Total</Text>
                    <Text style={styles.totalPrice}>€{total}</Text>
                </View>
            </View>
        );
    };

    return (
        <>
            <View style={styles.container}>
                <AppHeader
                    showBackButton={true}
                    showText={true} // Display text alongside the back button
                    title="My Cart"
                    onBackButtonPress={() => navigation.goBack()}
                />
                <FlatList
                    data={cartItems}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <CartItem item={item} onDelete={() => handleDeleteItem(item.id)} />
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

                {
                    cartItems.length > 0 && (
                        <AppButton
                            title="Checkout"
                            onPress={() => setShowDateModal(true)}
                            disabled={cartItems.length === 0} 
                            buttonStyle={styles.checkoutButton}
                            textStyle={styles.checkoutButtonText}
                        />
                    )
                }
                <DateTimeScreen visible={showDateModal} price={total} onClose={() => setShowDateModal(false)} />
            </View>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#f5f5f5',
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
        top: 20,
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
    footer: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        top: 20
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
        top: '50%'
    },
    emptyText: {
        fontSize: 20,
        color: '#aaa',
        top: '50%'
    },
    deleteButton: {
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