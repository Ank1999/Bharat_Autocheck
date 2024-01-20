import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import car from "../../assets/Car.jpg";
import profile from "../../assets/Profile.png";
import forwardArrow from "../../assets/forwardArrow.png";
import invite from "../../assets/invite.png";

export default function UserProfile(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Profile</Text>
      </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    margin: 0,
    padding: 10,
  },
  headerContainer: {
    position: 'absolute',
    top: 60,
    left: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#00214E",
  },
  profileImage: {
    alignSelf: "center",
    marginTop: 100,
    width: 183,
    height: 200, // Adjust the height as needed
  },
  rowContainer: {
    borderRadius: 15,
    backgroundColor: "#FFF",
    alignSelf: "stretch",
    marginTop: 30,
    alignItems: "center",
    flexDirection: "row",
    height:65,
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
  arrowLogo:{
    width: 25,
    height: 25,
    position:'absolute',
    left:'96%',
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  rowText: {
    color: "#00214E",
    fontSize: 19,
    fontWeight: '600',
    fontFamily: "Poppins", // Adjust the font family as needed
    lineHeight: 24, // Adjust the line height as needed
  },
  
});


