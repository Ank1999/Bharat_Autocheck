import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

export default function UserProfile(props) {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <Text>Profile</Text>
      </View>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3397bf85e67b7ecbf9f126ac259f9c3acb4e537a530112eeaa28eeceb92c7d9a?",
        }}
        style={styles.image1}
      />
      <View style={styles.view3}>
        <View style={styles.view4}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/89408971b9bbc048988a83c4deb26ae71edb2384a1d4c6203613758d6aa39597?",
            }}
            style={styles.image2}
          />
          <View style={styles.view5}>
            <Text>Personal Details</Text>
          </View>
        </View>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a5810c1cef2b34711480d350568e3eadbbaf5c3cd9b25627b10daa3afc3e4b6?",
          }}
          style={styles.image9}
        />
      </View>
      <View style={styles.view3}>
        <View style={styles.view4}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f81164b786e4c4af4b93b3350772b1fa365ba7eb9760b95f8d07a8ce23a17164?",
            }}
            style={styles.image2}
          />
          <View style={styles.view5}>
            <Text>Request Details</Text>
          </View>
        </View>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a5810c1cef2b34711480d350568e3eadbbaf5c3cd9b25627b10daa3afc3e4b6?",
          }}
          style={styles.image9}
        />
      </View>
      <View style={styles.view3}>
        <View style={styles.view4}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef74c5b6141ab2b0eefd46828d1866ba4a29a84c7b51483f61aa37d70d755e0e?",
            }}
            style={styles.image8}
          />
          <View style={styles.view5}>
            <Text>Invite Friend to Vehicle Essentials</Text>
          </View>
        </View>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a5810c1cef2b34711480d350568e3eadbbaf5c3cd9b25627b10daa3afc3e4b6?",
          }}
          style={styles.image9}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "#FFF",
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
    strokeWidth: 1,
    stroke: "#545454",
    overflow: "hidden",
    alignSelf: "center",
    position: "relative",
    display: "flex",
    width: 9,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    marginLeft: "5%",
    aspectRatio: "0.56",
  },
});
