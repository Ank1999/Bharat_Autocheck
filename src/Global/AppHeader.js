import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react'
import bike from '../../assets/Bike.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faArrowLeft } from '@fortawesome/free-solid-svg-icons';





const AppHeader = ({ title, showBackButton, showText, onBackButtonPress, onProfileClick }) => {
    return (
        <View style={styles.headerBar}>
        {showBackButton ? (
          <TouchableOpacity onPress={showText ? onBackButtonPress : null}>
            {showText ? (
              <View style={styles.headerContent}>
                <FontAwesomeIcon icon={faArrowLeft} size={22} style={{ marginRight: 15 }} />
                <View style={styles.nonClickableText}>
                  <Text style={styles.headerTitle}>{title}</Text>
                </View>
              </View>
            ) : (
              <FontAwesomeIcon icon={faArrowLeft} size={22} style={styles.backIcon} />
            )}
          </TouchableOpacity>
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
});

export default AppHeader;