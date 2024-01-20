import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import car from '../../assets/Car.jpg'
import bike from '../../assets/Bike.png'

export default function UserProfile(props) {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <Text>Profile</Text>
      </View>
      <Image
        resizeMode="contain"
        source={car}
        style={styles.image1}
      />
      <View style={styles.view3}>
        <View style={styles.view4}>
          <Image
            resizeMode="contain"
            source={car}
            style={styles.image2}
          />
          <View style={styles.view5}>
            <Text>Personal Details</Text>
          </View>
        </View>
        <Image
          resizeMode="contain"
          source={forwardArrow}
          style={styles.image9}
        />
      </View>
      <View style={styles.view3}>
        <View style={styles.view4}>
          <Image
            resizeMode="contain"
            source={car}
            style={styles.image2}
          />
          <View style={styles.view5}>
            <Text>Request Details</Text>
          </View>
        </View>
        <Image
          resizeMode="contain"
          source={forwardArrow}
          style={styles.image9}
        />
      </View>
      <View style={styles.view3}>
        <View style={styles.view4}>
          <Image
            resizeMode="contain"
            source={invite}
            style={styles.image8}
          />
          <View style={styles.view5}>
            <Text>Invite Friend to Vehicle Essentials</Text>
          </View>
        </View>
        <Image
          resizeMode="contain"
          source={forwardArrow}

          style={styles.image9}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    // backgroundColor: "#FFF",
    display: "flex",
    // maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    margin: "0 auto",
    padding: "50px 28px 23px",
  },
  view2: {
    color: "#00214E",
    textAlign: "center",
    alignSelf: "start",
    whiteSpace: "nowrap",
    margin: "6px 0 0 15px",
    font: "600 35px/69% Poppins, sans-serif ",
  },
  image1: {
    overflow: "hidden",
    alignSelf: "center",
    position: "relative",
    display: "flex",
    marginTop: 38,
    width: 183,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "0.92",
  },
  view3: {
    borderRadius: 24,
    boxShadow: "0px 0px 24px -6px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#FFF",
    alignSelf: "stretch",
    display: "flex",
    marginTop: 45,
    width: "100%",
    alignItems: "center", // Center-align content horizontally
    flexDirection: "row",
    padding: "7%",
  },
  view4: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  image2: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 28,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view5: {
    flex: 1,
    marginLeft: 16,
    color: "#00214E",
    font: "600 19px/126% Poppins, sans-serif",
  },
  image8: {
    fill: "#00214E",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 29,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1.45",
  },
  image9: {
  },
});
