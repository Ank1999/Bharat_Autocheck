import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const BASE_API_URL = 'YOUR_API_URL'; // Replace with your API URL

const AuthService = {

    async register(email, password) {
        try {
            const response = await axios.post(`${BASE_API_URL}/register`, {
                email,
                password,
            });
            const { token } = response.data;
            await SecureStore.setItemAsync('token', token);
            return token;
        } catch (error) {
            console.error('Registration Error:', error);
            throw error;
        }
    },

    async login(email, password) {
        try {
            const response = await axios.post(`${BASE_API_URL}/login`, {
                email,
                password,
            });
            const { token } = response.data;
            await SecureStore.setItemAsync('token', token);
            return true;
        } catch (error) {
            console.error('Login error', error);
            return false;
        }
    },

    async logout() {
        await SecureStore.deleteItemAsync('token');
    },

    async getToken() {
        return await SecureStore.getItemAsync('token');
    }
};

export default AuthService;