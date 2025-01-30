import axios from 'axios';
import config from '../config/configuration';
import errorHandler from '../src/utils/handleError';

console.log("Wishlist Service!");
export class WishlistService {
  constructor() {
    this.apiUrl = `${config.backendBaseUrl}/wishlist`; // Base URL for wishlist API
  }

  // Add an item to the wishlist
  async addItemToWishlist(userId, itemData) {
    try {
      const response = await axios.post(`${this.apiUrl}/${userId}/add`, itemData, { withCredentials: true, });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  //   // Get wishlist for a user
  //   async getWishlist(userId) {
  //     try {
  //       const response = await axios.get(`${this.apiUrl}/${userId}`);
  //       return response.data;
  //     } catch (error) {
  //       this.handleError(error);
  //     }
  //   }

  //   // Remove an item from the wishlist
  //   async removeItemFromWishlist(userId, itemId) {
  //     try {
  //       const response = await axios.delete(`${this.apiUrl}/${userId}/remove/${itemId}`);
  //       return response.data;
  //     } catch (error) {
  //       this.handleError(error);
  //     }
  //   }

  //   // Clear the wishlist for a user
  //   async clearWishlist(userId) {
  //     try {
  //       const response = await axios.delete(`${this.apiUrl}/${userId}/clear`);
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

const wishlistService = new WishlistService(); // Export a single instance of the WishlistService class

export default wishlistService;
