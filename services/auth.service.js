import axios from 'axios';
import config from '../config/configuration';
import errorHandler from '../src/utils/handleError';

export class AuthService {
  constructor() {
    this.apiUrl = `${config.backendBaseUrl}`; // base URL for authentication API
  }

  // Signup a new user
  async signup(userData) {
    try {
      const response = await axios.post(`${this.apiUrl}/signup`, userData, { withCredentials: true, });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Signin a user
  async signin(credentials) {
    try {
      const response = await axios.post(`${this.apiUrl}/signin`, credentials, { withCredentials: true, });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Check Authorized a user
  async checkauthorized() {
    try {
      const response = await axios.get(`${this.apiUrl}/checkauth`, { withCredentials: true, });
      console.log("Check OAuth Response: ", response);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Signout a user
  async signout() {
    try {
      const response = await axios.get(`${this.apiUrl}/signout`, { withCredentials: true, });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Verify a user
  async verification(credentials) {
    try {
      const response = await axios.post(`${this.apiUrl}/verifyotp`, credentials, { withCredentials: true, });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Verify a user
  async regeneratecode(credentials) {
    try {
      const response = await axios.post(`${this.apiUrl}/regenerateotp`, credentials, { withCredentials: true, });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Reset Password a user
  async resetpassword(credentials) {
    try {
      const response = await axios.post(`${this.apiUrl}/resetpassword`, credentials, { withCredentials: true, });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Google Signin
  async googleSignin(tokenId) {
    try {
      const response = await axios.get(`${this.apiUrl}/googleredirect`, { tokenId });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Facebook Signin
  async facebookSignin(tokenId) {
    try {
      const response = await axios.get(`${this.apiUrl}/facebook/redirect`, { tokenId });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Handle error responses
  handleError(error) {
    console.log("Error hnadler", error);
    errorHandler(error);
  }
}

const authService = new AuthService(); // Export a single instance of the AuthService class


export default authService;