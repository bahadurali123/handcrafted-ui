import axios from 'axios';
import config from '../config/configuration';
import errorHandler from '../src/utils/handleError';

export class LikeService {
  constructor() {
    this.apiUrl = `${config.backendBaseUrl}`; // base URL for likes API
  }

  // Fetch all likes
  async getAllLikes() {
    try {
      const response = await axios.get(`${this.apiUrl}/likes`, { withCredentials: true, });
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

const likeService = new LikeService(); // Export a single instance of the LikeService class

export default likeService;