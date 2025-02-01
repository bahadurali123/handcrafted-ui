import axios from 'axios';
import config from '../config/configuration';
import errorHandler from '../src/utils/handleError';

export class OrderService {
    constructor() {
        this.apiUrl = `${config.backendBaseUrl}/orders`; // Base URL for order management API
    }

    // Fetch orders for a specific user
    async getOrdersByUser(userId) {
        try {
            const response = await axios.get(`${this.apiUrl}/user/${userId}`, { withCredentials: true, });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }
    // Fetch orders for a specific user
    async getAllOrders() {
        try {
            const response = await axios.get(`${this.apiUrl}/all`, { withCredentials: true, });
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

const orderService = new OrderService(); // Export a single instance of the OrderService class

export default orderService;
