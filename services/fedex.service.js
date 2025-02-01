import axios from 'axios';
import config from '../config/configuration';
import errorHandler from '../src/utils/handleError';

export class FedExService {
    constructor() {
        this.Url = `${config.backendBaseUrl}/fedex`;
    }

    // Find shipping rates
    async findRate(rateRequestData) {
        try {
            const response = await axios.get(`${this.Url}/rates/${rateRequestData}`,
                { withCredentials: true, }
            );
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // Create a FedEx shipment
    async createShipment(shipmentData) {
        try {
            const response = await axios.post(`${this.Url}/createshipment`,
                shipmentData,
                { withCredentials: true, }
            );
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // Track a shipment by its tracking number
    async trackShipment(trackingNumber) {
        try {
            const response = await axios.get(`${this.Url}/track/${trackingNumber}`,
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

const fedexService = new FedExService(); // Export a single instance of the FedExService class

export default fedexService;