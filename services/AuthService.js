import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

const UAT_BASE_API_URL = "http://reveal-services-test.us-east-1.elasticbeanstalk.com";

const AuthService = {

  async signupOtp(phone) {
    try {
      const response = await axios.post(`${UAT_BASE_API_URL}/user/signupOtp`, { phone });

    } catch (error) {
      // console.error("Login error", error);
      Alert.alert('Login Failed', 'An error occurred during login');
      return false;
    }
  },
  async verifyOtp(loginId, code) {
    try {
      const response = await axios.post(`${UAT_BASE_API_URL}/user/verify-otp`, {
        loginId,
        code,
      });

      if (response.status === 200 && response.data && response.data.token && response.data.token.jwt) {
        this.setToken(response.data.token.jwt);

        // Save Refresh Token to secure storage, if you also need to handle token refresh logic
        if (response.data.refreshToken && response.data.refreshToken.jwt) {
          this.setRefreshToken(response.data.refreshToken.jwt);
        }

        return true;
      } else {
        // Handle failure
        Alert.alert('Verification Failed', 'Invalid OTP or server error');
        return false;
      }
    } catch (error) {
      console.error("OTP Verification error:", error);
      Alert.alert('Verification Failed', 'There was an error verifying the OTP.');
      throw error;
    }
  },

  async setToken(jwtToken) {
    try {
      await SecureStore.setItemAsync("jwtToken", jwtToken);
      console.log("JWT Token saved successfully");
    } catch (error) {
      console.error("Error saving JWT token:", error);
      Alert.alert('Token Storage Failed', 'An error occurred while saving the token');
    }
  },

  async setRefreshToken(refreshToken) {
    try {
      await SecureStore.setItemAsync("refreshToken", refreshToken);
      console.log("Refresh Token saved successfully");
    } catch (error) {
      console.error("Error saving Refresh Token:", error);
      Alert.alert('Token Storage Failed', 'An error occurred while saving the refresh token');
    }
  },

  async getToken() {
    let jwtToken;
    try {
      jwtToken = await SecureStore.getItemAsync('jwtToken');
      console.log("Retrieved JWT Token:", jwtToken);
    } catch (error) {
      console.error("Error retrieving JWT token:", error);
      jwtToken = null; // Explicitly set to null to make error handling clearer
    }
    return jwtToken; // Return the token or null if there was an error
  },
};

export default AuthService;
