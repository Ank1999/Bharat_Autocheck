import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react'
import bike from '../../assets/Bike.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Ionicons } from '@expo/vector-icons';




const AppHeader = ({ title, showText, onBackButtonPress, }) => {
  return (
    
    <SafeAreaView style={styles.safeArea}>
      
      {showText ? (
        <View style={styles.header}>
          <TouchableOpacity  onPress={onBackButtonPress}>
          <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.nonClickableText}>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>
        </View>
      ) : (
        <TouchableOpacity  onPress={onBackButtonPress}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      )}
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  safeArea: {
    // flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
    backgroundColor: 'white'
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 24
  },

  button: {
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