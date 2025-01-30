import axios from 'axios';
import config from '../config/configuration';
import errorHandler from '../src/utils/handleError';

console.log("Message Service!");
export class MessageService {
    constructor() {
        this.apiUrl = `${config.backendBaseUrl}`; // Base URL for contact page messages API
    }

    // Create a new message
    async createMessage(messageData) {
        try {
            const response = await axios.post(`${this.apiUrl}/contact`, messageData, { withCredentials: true, });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    //   // Fetch all messages
    //   async getAllMessages() {
    //     try {
    //       const response = await axios.get(this.apiUrl);
    //       return response.data;
    //     } catch (error) {
    //       this.handleError(error);
    //     }
    //   }

    //   // Fetch a specific message by ID
    //   async getMessageById(messageId) {
    //     try {
    //       const response = await axios.get(`${this.apiUrl}/${messageId}`);
    //       return response.data;
    //     } catch (error) {
    //       this.handleError(error);
    //     }
    //   }

    //   // Delete a message by ID
    //   async deleteMessage(messageId) {
    //     try {
    //       const response = await axios.delete(`${this.apiUrl}/${messageId}`);
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

const messageService = new MessageService(); // Export a single instance of the MessageService class

export default messageService;