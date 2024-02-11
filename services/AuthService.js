import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

const BASE_API_URL = "http://192.168.1.31:8080"; // Replace with your API URL\

const AuthService = {
  async register(email, password) {
    try {
      const response = await axios.post(`${BASE_API_URL}/user/signup`, {
        email,
        password,
      });
      console.log("res ", response);
      // const { token } = response.data;
      // await SecureStore.setItemAsync('token', token);
      if (response.status === "200") {
        alert("Registration successful")
      }
    } catch (error) {
      console.error("Registration Error:", error);
      throw error;
    }
  },

  async login(email, password) {
    try {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": BASE_API_URL, 
          // Other headers if needed
        }
      };
      
      const response = await axios.post(`${BASE_API_URL}/user/login`, {
        email,
        password,
      }, config);
      console.log("res login", response);

      const { token } = response.data;
      console.log("token", response.data);

      await SecureStore.setItemAsync("token", response.data);
      return true;
    } catch (error) {
      console.error("Login error", error);
      return false;
    }
  },  

  async logout() {
    await SecureStore.deleteItemAsync("token");
  },

  async getToken() {
    return await SecureStore.getItemAsync("token");
  },
};

export default AuthService;
