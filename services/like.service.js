import axios from 'axios';
import config from '../config/configuration';
import errorHandler from '../src/utils/handleError';

console.log("Like Service!");
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

  //   // Fetch likes for a specific item by ID (e.g., product, post, review)
  //   async getLikesByItemId(itemId) {
  //     try {
  //       const response = await axios.get(`${this.apiUrl}/item/${itemId}`);
  //       return response.data;
  //     } catch (error) {
  //       this.handleError(error);
  //     }
  //   }

  //   // Add a like to an item
  //   async addLike(itemId, userId) {
  //     try {
  //       const response = await axios.post(this.apiUrl, { itemId, userId });
  //       return response.data;
  //     } catch (error) {
  //       this.handleError(error);
  //     }
  //   }

  //   // Remove a like from an item
  //   async removeLike(likeId) {
  //     try {
  //       const response = await axios.delete(`${this.apiUrl}/${likeId}`);
  //       return response.data;
  //     } catch (error) {
  //       this.handleError(error);
  //     }
  //   }

  // Handle error responses
  handleError(error) {
    console.log("Error hnadler", error);
    errorHandler(error);
  }
}

const likeService = new LikeService(); // Export a single instance of the LikeService class

export default likeService;