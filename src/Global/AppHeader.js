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
                <Icon name="chevron-left" size={30} color="white" />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4a6fa5',
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
    top:20
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },

  profileIcon: {
    color: 'black',
    margin: 10
  },
  nonClickableText: {
    opacity: 0.7, // Adjust the opacity to make it appear non-clickable
  },
  button: {
    width: 45, 
    height: 45, 
    borderRadius: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, 
    borderColor: 'white', 
    backgroundColor: 'transparent',
    right: 12
  }
});

export default AppHeader;