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

  // Handle error responses
  handleError(error) {
    console.log("Error hnadler", error);
    errorHandler(error);
  }
}

const wishlistService = new WishlistService(); // Export a single instance of the WishlistService class

export default wishlistService;
