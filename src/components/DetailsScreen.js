import React, { useState, useRef } from 'react';
import AppHeader from '../Global/AppHeader';
import { useCart } from '../Global/CartContext';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import AppButton from '../Global/AppButton';
import { v4 as uuidv4 } from 'uuid';
import Toast from 'react-native-toast-message';

const windowWidth = Dimensions.get('window').width;

const DetailScreen = ({ route, navigation }) => {

  const { title, imageUrl, description, price } = route.params;
  const { addToCart } = useCart();
  const [readMore, setReadMore] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  const handleAddToCart = () => {
    addToCart({
      id: uuidv4(),
      title: title,
      price: price,
      image: imageUrl
    });
    setIsAddedToCart(true);
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Added to cart successfully!',
      visibilityTime: 4000,
      autoHide: true,
      bottomOffset: 50
    });
  };

  return (
    <>
      <View style={styles.container}>
        <AppHeader
          showBackButton={true}
          showText={true} // Display text alongside the back button
          title="Product Description"
          onBackButtonPress={() => navigation.goBack()}
        />

        <ScrollView style={styles.scrollContainer}>
          <Image source={{ uri: imageUrl }} style={styles.productImage} />
          <Text style={styles.detailTitle}>{title}</Text>
          <View style={styles.addToCartContainer}>
            <Text style={styles.priceText}>{price}</Text>
            <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>
            {readMore ? description : `${description.substring(0, 100)}... `}
            <Text onPress={toggleReadMore} style={styles.readMoreText}>
              {readMore ? 'Read less' : 'Read more'}
            </Text>
          </Text>
          <Text style={styles.importantInfoTitle}>Important Information</Text>
        </ScrollView>

        {isAddedToCart && (
          <AppButton
            title="View cart"
            price={price}
            onPress={() => navigation.navigate('VehicleCart')}
          />
        )}
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
};



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    marginHorizontal: 10
  },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
    marginHorizontal: 6,
  },
  addToCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 6,

  },
  addButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,

  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'

  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    margin: 16,
  },
  readMoreText: {
    fontWeight: 'bold',
    color: '#0000ff', // Choose a color that suits your app
  },
  importantInfoTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
});


export default DetailScreen;
