import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function SignUpSignIn({ navigation }) {
  const [isSignInView, setIsSignInView] = useState(true); // Toggle between sign-in and sign-up view
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isOtpSent, setIsOtpSent] = useState(false);

  // OTP input refs
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const thirdInputRef = useRef(null);
  const fourthInputRef = useRef(null);
  const otpInputRefs = [
    firstInputRef,
    secondInputRef,
    thirdInputRef,
    fourthInputRef,
  ];

  const handleSignUpOrSignIn = () => {
    if (isSignInView) {
      // Sign-In logic
      console.log("Sign-In with: ", email, password);
      //TODO
      // Verify email and password with backend
      
    //   fetch("http://localhost:8080/user/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       username: username,
    //       password: password,
    //     }),
    //   })
    //     .then((response) => {console.log(response); response.json();})
    //     .then((data) => {
    //       // Handle successful sign-up response
    //       navigation.navigate("Main");
    //     })
    //     .catch((error) => {
    //       // Handle sign-up error
    //       alert("Sign-in Error:");
    //       console.error("Sign-in Error:", error);
    //       // You can display an error message to the user
    //     });
    } else {
      // Sign-Up logic
      if (password !== confirmPassword) {
        Alert.alert("Error", "Passwords do not match");
        return;
      }
      console.log("Sign-Up with: ", email, password, phoneNumber);
      // Create user account in your backend
      // Make a POST request to your sign-up endpoint using fetch
      fetch("http://localhost:8080/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          mobileNo: phoneNumber,
          password: password,
        }),
      })
        .then((response) => {console.log(response); response.json();})
        .then((data) => {
          // Handle successful sign-up response
          navigation.navigate("Main");
        })
        .catch((error) => {
          // Handle sign-up error
          alert("Sign-Up Error:");
          console.error("Sign-Up Error:", error);
          // You can display an error message to the user
        });
    }
  };

  return (
    <View style={styles.container}>
      {!isSignInView && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={username}
            onChangeText={setUsername}
            keyboardType="email-address"
          />
        </>
      )}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {!isSignInView && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            editable={!isOtpSent}
          />
        </>
      )}
      <TouchableOpacity style={styles.button} onPress={handleSignUpOrSignIn}>
        <Text style={styles.buttonText}>
          {isSignInView ? "Sign In" : "Sign Up"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setIsSignInView(!isSignInView)}
      >
        <Text style={styles.buttonText}>
          {isSignInView ? "New here?  Create Account" : "Switch to Sign In"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  toggleButton: {
    alignSelf: "center",
    marginTop: 30,
    backgroundColor: "#007AFF", // Professional color
    borderRadius: 8, // Rounded corners
    paddingVertical: 12, // Vertical padding
    paddingHorizontal: 24, // Horizontal padding
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  otpInputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  otpInput: {
    width: "22%",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    fontSize: 18,
    textAlign: "center",
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#34C759",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    // fontWeight: 'bold',
  },
});
