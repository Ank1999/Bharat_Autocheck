import axios from 'axios';
import AuthService from './AuthService';

const BASE_API_URL = 'YOUR_API_URL';

const ApiService = {

  async get(endpoint) {
    const token = await AuthService.getToken();
    return axios.get(`${BASE_API_URL}/${endpoint}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  // Add other API methods here...
};

export default ApiService;