import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import DateTimeScreen from '../components/DateTimeScreen';
import AppHeader from '../Global/AppHeader';

const DetailScreen = ({ route, navigation }) => {
  const image = require('../../assets/Image.png');
  const { title, imageUrl, description } = route.params;

  const [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false);
  const animationHeight = useRef(new Animated.Value(0)).current; // Initial value for animation

  const [showDateModal, setShowDateModal] = useState(false);

  const handlePayment = async () => {
    const paymentUrl = 'https://sandbox.cashfree.com/pg/view/upi/dsloo6l.session_DsMCzBzZhoAmVCnJr_Wy8j8w6PstOsT8PdvO-tOUczEsZT1izuV_zSCTJA-1Q_sWyq9hlW4GsVQppU_VIe-X_3SFMF1ESpe3jJNqmDTZyOA3.4ed1c1a1-1b0c-414b-bb3e-53d5fe83e0ad';
    // await WebBrowser.openBrowserAsync(paymentUrl);
    const result = await WebBrowser.openBrowserAsync(paymentUrl);

    console.log("res ")
    console.log("res ::: " + result)

  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          {/* <AppHeader
            showBackButton={true}
            showText={true} // Display text alongside the back button
            title="Detaills"
            onBackButtonPress={() => navigation.goBack()}
          /> */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Details</Text>
      </View>


      <ScrollView >
        <Image source={{ uri: imageUrl }} style={styles.productImage} />
        <Text style={styles.detailTitle}>{title}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </ScrollView>


      {/* Action Buttons */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.selectDateButton} onPress={() => setShowDateModal(true)}>
          <Text style={styles.selectDateText}>Select date & time</Text>
        </TouchableOpacity>
        <DateTimeScreen visible={showDateModal} onClose={() => setShowDateModal(false)} />

        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => navigation.navigate('VehicleCart', {
            cartItems: [{
              id: '1', // Use a unique ID for each item
              title: title,
              price: 100,
              image: imageUrl
            }]
          })}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: 40, // Adjust the top margin as per your device's status bar height
  },
  backButton: {
    // Placeholder style for back button; insert back icon and style accordingly
  },
  headerTitle: {
    fontWeight: '600',
    fontSize: 22,
    textAlign: 'center',
  },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    paddingHorizontal: 20,
    paddingBottom: 20,
    textAlign: 'justify',
  },
  scrollView: {
    backgroundColor: '#f0f0f5',
  },
  inspectionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  detailInfo: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
  },
  actionsContainer: {
    padding: 16,
    paddingBottom: 20, // Extra padding at the bottom
  },
  selectDateButton: {
    backgroundColor: '#E8E8E8',
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectDateText: {
    fontSize: 18,
    color: '#000',
  },
  addToCartButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'center',
  },
  addToCartText: {
    fontSize: 18,
    color: '#FFF',
  },
  buyNowButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buyNowText: {
    fontSize: 18,
    color: '#FFF',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'red', // Adjust the color and opacity to your preference
  },
  // modalView: {
  //   position: 'absolute',
  //   bottom: 0,
  //   width: '100%',
  //   height:'75%',
  //   backgroundColor:'red'
  //   // Style your modal view as needed
  // },
});


export default DetailScreen;
