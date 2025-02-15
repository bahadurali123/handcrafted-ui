import axios from 'axios';
import config from '../config/configuration';
import errorHandler from '../src/utils/handleError';

console.log("Payment Service!");
export class PaymentService {
    constructor() {
        this.paypalApiUrl = `${config.backendBaseUrl}/paypal`; // Base URL for PayPal-related API
        this.stripeApiUrl = `${config}/stripe`; // Base URL for Stripe-related API
    }

    // PayPal: Create a new order
    async createPaypalOrder(orderData) {
        try {
            const response = await axios.post(`${this.paypalApiUrl}/order/create`, orderData, { withCredentials: true, });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // PayPal: Capture payment for an order
    async capturePaypalPayment(orderId) {
        try {
            const response = await axios.post(`${this.paypalApiUrl}/order/capture`, orderId, { withCredentials: true, });
            return response;
        } catch (error) {
            this.handleError(error);
        }
    }


    //   For future updates if possible.
    //   // PayPal: Refund a payment
    //   async refundPaypalPayment(paymentId, refundData) {
    //     try {
    //       const response = await axios.post(`${this.paypalApiUrl}/refunds`, { paymentId, ...refundData });
    //       return response.data;
    //     } catch (error) {
    //       this.handleError(error);
    //     }
    //   }

    //   // Stripe: Create a new order (payment intent)
    //   async createStripePaymentIntent(intentData) {
    //     try {
    //       const response = await axios.post(`${this.stripeApiUrl}/payment-intents`, intentData);
    //       return response.data;
    //     } catch (error) {
    //       this.handleError(error);
    //     }
    //   }

    //   // Stripe: Capture payment for a payment intent
    //   async captureStripePayment(paymentIntentId) {
    //     try {
    //       const response = await axios.post(`${this.stripeApiUrl}/payment-intents/${paymentIntentId}/capture`);
    //       return response.data;
    //     } catch (error) {
    //       this.handleError(error);
    //     }
    //   }

    //   // Stripe: Refund a payment
    //   async refundStripePayment(paymentIntentId, refundData) {
    //     try {
    //       const response = await axios.post(`${this.stripeApiUrl}/refunds`, { paymentIntentId, ...refundData });
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

const paymentService = new PaymentService(); // Export a single instance of the PaymentService class

export default paymentService;