import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import DateTimeScreen from '../components/DateTimeScreen';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';

const DetailScreen = ({ navigation }) => {
  const image = require('../../assets/Image.png');

  const [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false);
  const animationHeight = useRef(new Animated.Value(0)).current; // Initial value for animation

  const [modalVisible, setModalVisible] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleDateTime = () => {
    if (isDateTimePickerVisible) {
      // Animate and hide
      Animated.timing(animationHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      // Animate and show
      Animated.timing(animationHeight, {
        toValue: 300, // Assuming the overlay should slide up to 300 height
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
    setDateTimePickerVisible(!isDateTimePickerVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          {/* Insert back icon */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Inspection Details</Text>
      </View>
      <ScrollView >

        <Image source={image} style={styles.productImage} />

        {/* Description and Details */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>About</Text>
          <Text style={styles.descriptionText}>
            RevealNow provides comprehensive inspection reports for used vehicles. This inspection ensures the quality and condition of the vehicle you are interested in. Don't miss out on this opportunity to make an informed decision before purchasing.
          </Text>
          <View style={styles.inspectionDetails}>
            <View style={styles.detail}>
              <Text style={styles.detailTitle}>Inspection Type</Text>
              <Text style={styles.detailInfo}>Basic</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailTitle}>Inspection Duration</Text>
              <Text style={styles.detailInfo}>1 hour</Text>
            </View>
          </View>
        </View>


        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.selectDateButton} onPress={toggleModal}>
            <Text style={styles.selectDateText}>Select a date & time</Text>
          </TouchableOpacity>

          {/* Translucent Overlay */}
          {modalVisible && (
            <View style={styles.overlay} />
          )}

          {/* Modal with Time Selection */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={toggleModal}
          >
            <View style={styles.modalView}>
            <DateTimeScreen onClose={() => setModalVisible(false)} />
            </View>
          </Modal>

          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyNowButton}>
            <Text style={styles.buyNowText}>Buy Now</Text>
          </TouchableOpacity>
        </View>

        {/* Footer with tab bar icons */}
        <View style={styles.footer}>
          {/* Insert tab bar icons */}
        </View>
      </ScrollView>
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
    height: 300, // Adjust the height based on your image aspect ratio
    resizeMode: 'cover',
  },
  descriptionContainer: {
    padding: 16,
  },
  descriptionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  descriptionText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 16,
  },
  inspectionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  detail: {
    // For additional styling for detail container
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
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
  dateTimeScreenContainer: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    maxHeight: '70%', // Set the max height to 50% of the screen
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'red', // Adjust the color and opacity to your preference
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height:'75%',
    backgroundColor:'red'
    // Style your modal view as needed
  },
});


export default DetailScreen;
