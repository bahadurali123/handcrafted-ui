import axios from 'axios';
import config from '../config/configuration';
import errorHandler from '../src/utils/handleError';

console.log("Auth Service!");
export class AuthService {
  constructor() {
    this.apiUrl = `${config.backendBaseUrl}`; // base URL for authentication API
  }

  // Signup a new user
  async signup(userData) {
    try {
      const response = await axios.post(`${this.apiUrl}/signup`, userData, { withCredentials: true, });
      // Save the token or user data in local storage or cookie if needed
      // this.setToken(response.data.token);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Signin a user
  async signin(credentials) {
    try {
      console.log("LogIn");
      const response = await axios.post(`${this.apiUrl}/signin`, credentials, { withCredentials: true, });
      // this.setToken(response.data.token);
      console.log("Login Response: ", response);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Check Authorized a user
  async checkauthorized() {
    try {
      console.log("Check Authorized");
      const response = await axios.get(`${this.apiUrl}/checkauth`, { withCredentials: true, });
      // this.setToken(response.data.token);
      console.log("Check Authorized Response: ", response);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Signout a user
  async signout() {
    try {
      console.log("Signout");
      const response = await axios.get(`${this.apiUrl}/signout`, { withCredentials: true, });
      // this.setToken(response.data.token);
      console.log("Signout Response: ", response);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Verify a user
  async verification(credentials) {
    try {
      console.log("verify");
      const response = await axios.post(`${this.apiUrl}/verifyotp`, credentials, { withCredentials: true, });
      // this.setToken(response.data.token);
      console.log("Verify Response: ", response);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Verify a user
  async regeneratecode(credentials) {
    try {
      console.log("Regenerate OTP");
      const response = await axios.post(`${this.apiUrl}/regenerateotp`, credentials, { withCredentials: true, });
      // this.setToken(response.data.token);
      console.log("Regenerate OTP Response: ", response);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Reset Password a user
  async resetpassword(credentials) {
    try {
      console.log("Reset Password");
      const response = await axios.post(`${this.apiUrl}/resetpassword`, credentials, { withCredentials: true, });
      // this.setToken(response.data.token);
      console.log("Reset Password Response: ", response);
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
      // this.setToken(response.data.token);
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
  // handleError(error) {
  //   console.error('Category Error:', error.response || error.message);
  //   throw new Error(error.response?.data?.message || 'Category operation failed');
  // }
}

const authService = new AuthService(); // Export a single instance of the AuthService class


export default authService;