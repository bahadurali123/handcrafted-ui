import axios from 'axios';
import config from '../config/configuration';
import errorHandler from '../src/utils/handleError';

console.log("Shipping Service!");
export class ShippingService {
    constructor() {
        this.apiUrl = `${config.backendBaseUrl}`; // base URL for shipping API
    }

    // Fetch user shipping options
    async getUserShippings() {
        try {
            const response = await axios.get(`${this.apiUrl}/shippings`, { withCredentials: true, });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // Fetch all shipping options
    async getAllShippings() {
        try {
            const response = await axios.get(`${this.apiUrl}/shippings/all`, { withCredentials: true, });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    //   // Fetch a specific shipping option by ID
    //   async getShippingById(shippingId) {
    //     try {
    //       const response = await axios.get(`${this.apiUrl}/${shippingId}`);
    //       return response.data;
    //     } catch (error) {
    //       this.handleError(error);
    //     }
    //   }

    // Create a new shipping option
    async createShipping(shippingData) {
        try {
            const response = await axios.post(`${this.apiUrl}/shipping/add`,
                shippingData,
                { withCredentials: true, });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    //   Update status an existing shipping option
    async updateShippingStatus(shippingId) {
        try {
            console.log("Edit shipping status service", shippingId)
            const response = await axios.get(`${this.apiUrl}/shipping/edit/status/${shippingId}`,
                { withCredentials: true, }
            );
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // Update an existing shipping option
    async updateShipping(shippingId, shippingData) {
        try {
            const response = await axios.put(`${this.apiUrl}/shipping/edit/${shippingId}`,
                shippingData,
                { withCredentials: true, }
            );
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // Delete a shipping option
    async deleteShipping(shippingId) {
        try {
            const response = await axios.delete(`${this.apiUrl}/shipping/delete/${shippingId}`,
                { withCredentials: true, }
            );
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

const shippingService = new ShippingService(); // Export a single instance of the ShippingService class

export default shippingService;