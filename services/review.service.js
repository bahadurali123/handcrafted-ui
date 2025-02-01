import axios from 'axios';
import config from '../config/configuration';
import errorHandler from '../src/utils/handleError';

console.log("Review Service!");
export class ReviewService {
    constructor() {
        this.apiUrl = `${config.backendBaseUrl}`; // base URL for reviews API
    }

    // Fetch all reviews
    async getAllReviews() {
        try {
            const response = await axios.get(`${this.apiUrl}/reviews`, { withCredentials: true, });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // Create a new review
    async createReview(orderId, reviewData) {
        try {
            const response = await axios.post(`${this.apiUrl}/review/add/${orderId}`, reviewData, { withCredentials: true, });
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

const reviewService = new ReviewService(); // Export a single instance of the ReviewService class

export default reviewService;