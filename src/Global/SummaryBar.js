import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // make sure you have @react-navigation/native installed
import { useCart } from '../Global/CartContext'; // path to your cart context

const SummaryBar = () => {
  const navigation = useNavigation();
  const { cartItems } = useCart();
  
  // Function to navigate to the cart screen
  const goToCart = () => {
    navigation.navigate('VehicleCart'); // replace 'Cart' with the name of your cart screen
  };

  // Only render if there are items in the cart
  if (cartItems.length > 0) {
    return (
      <View style={styles.container}>
        <View style={styles.cartDetails}>
          <Image
            source={require('../../assets/cart-icon.png')} // Your cart icon image
            style={styles.cartIcon}
          />
          <Text style={styles.text}>{cartItems.length} Service Added</Text>
        </View>
        <TouchableOpacity onPress={goToCart} style={styles.viewCartButton}>
          <Text style={styles.viewCartText}>VIEW CART</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return null; // Return null if no items in cart
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopColor: '#e2e2e2',
    borderTopWidth: 1,
  },
  cartDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  text: {
    fontSize: 16,
  },
  viewCartButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  viewCartText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SummaryBar;
