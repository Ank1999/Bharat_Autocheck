import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react'
import bike from '../../assets/Bike.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';




const AppHeader = ({ title, showBackButton, showText, onBackButtonPress, onProfileClick }) => {
  return (
    <View style={styles.headerBar}>
      {showBackButton ? (
        <View>
          {showText ? (
            <View style={styles.headerContent}>
              <TouchableOpacity style={styles.button} onPress={onBackButtonPress}>
                <Icon name="chevron-left" size={30} color="black" />
              </TouchableOpacity>
              <View style={styles.nonClickableText}>
                <Text style={styles.headerTitle}>{title}</Text>
              </View>
            </View>
          ) : (
            <TouchableOpacity style={styles.button} onPress={onBackButtonPress}>
              <Icon name="chevron-left" size={30} color="black" />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <>
          <Text style={styles.headerTitle}>{title}</Text>
          <TouchableOpacity style={styles.profileButton} onPress={onProfileClick}>
            <FontAwesomeIcon icon={faUser} size={22} style={styles.profileIcon} />
          </TouchableOpacity>
        </>
      )}
    </View>

  );
};

const styles = StyleSheet.create({
  headerBar: {
    position: 'absolute', // Positioning it absolutely
    top: 40, // Align it to the top of the screen
    left: 0, // Align it to the left of the screen
    right: 0, // Stretch it to the right of the screen
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10, // Add margin to the right of the title
  },
  profileButton: {
    // Styling for the profile button
  },
  profileIcon: {
    // fontSize:'40',
    color: 'black',
    margin: 10
  },
  nonClickableText: {
    opacity: 0.7, // Adjust the opacity to make it appear non-clickable
  },
  button: {
    width: 45, // Adjust size as needed
    height: 45, // Adjust size as needed
    borderRadius: 10, // This should be half of the width to make it circular
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, // Adjust border width as needed
    borderColor: 'black', // Adjust border color as needed
    backgroundColor: 'transparent', 
    right:12
  }
});

export default AppHeader;