import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import car from "../../assets/Car.jpg";
import profile from "../../assets/Profile.png";
import forwardArrow from "../../assets/forwardArrow.png";
import invite from "../../assets/invite.png";
import AppHeader from "../Global/AppHeader";

export default function UserProfile({ navigation }) {

  const handleLogOut = () => {

  }

  return (
    <View style={styles.container}>

      <AppHeader
        showBackButton={true}
        showText={true} // Display text alongside the back button
        title="Profile"
        onBackButtonPress={() => navigation.goBack()}
      />
      <Image resizeMode="contain" source={profile} style={styles.profileImage} />

      <View style={styles.rowContainer}>
        <View style={styles.rowContent}>
          <Image resizeMode="contain" source={profile} style={styles.logo} />
          <View style={styles.textContainer}>
            <Text style={styles.rowText}>Personal Details</Text>
          </View>
        </View>
        <Image
          resizeMode="contain"
          source={forwardArrow}
          style={styles.arrowLogo}
        />
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.rowContent}>
          <Image resizeMode="contain" source={car} style={styles.logo} />
          <View style={styles.textContainer}>
            <Text style={styles.rowText}>Request Details</Text>
          </View>
        </View>
        <Image
          resizeMode="contain"
          source={forwardArrow}
          style={styles.arrowLogo}
        />
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.rowContent}>
          <Image resizeMode="contain" source={invite} style={styles.logo} />
          <View style={styles.textContainer}>
            <Text style={styles.rowText}>Invite Friend </Text>
          </View>
        </View>
        <Image
          resizeMode="contain"
          source={forwardArrow}
          style={styles.arrowLogo}
        />
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogOut}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Log out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#00214E",
  },
  profileImage: {
    alignSelf: "center",
    marginTop: 20,
    width: 183,
    height: 200, // Adjust the height as needed
  },
  rowContainer: {
    borderRadius: 10,
    backgroundColor: "#FFF",
    alignSelf: "stretch",
    marginTop: 30,
    alignItems: "center",
    flexDirection: "row",
    height: 65,
    padding: 10, // Adjust the padding as needed
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 24,
    shadowOpacity: 1,
    elevation: 5,
  },
  rowContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 28,
    height: 28, // Adjust the height as needed
  },
  arrowLogo: {
    width: 25,
    height: 25,
    position: 'absolute',
    left: '96%',
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  rowText: {
    color: "#00214E",
    fontSize: 19,
    fontWeight: '600',
    // fontFamily: "Poppins", // Adjust the font family as needed
    lineHeight: 24, // Adjust the line height as needed
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
    top: 40
  },
  button: {
    width: '100%',
    height: 60,
    // backgroundColor: 'white',
    borderWidth: 1, // Add a gray border
    borderColor: 'lightgray', // Gray border color
    borderRadius: 10, // Border radius for rounded corners
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'gray', // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: 2, // Shadow radius
    elevation: 5, // Elevation for Android shadow
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});


