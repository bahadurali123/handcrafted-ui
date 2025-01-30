import axios from 'axios';
import config from '../config/configuration';
import errorHandler from '../src/utils/handleError';

console.log("Product Service!");
export class ProductService {
    constructor() {
        // this.apiUrl = `${config.backendBaseUrl}/admin`; // base URL for products API
        this.Url = `${config.backendBaseUrl}/admin`;
        // this.baseUrl = `${config.backendBaseUrl}/blog`;
    }

    // Fetch all products
    async getAllProducts() {
        try {
            const response = await axios.get(`${this.Url}/products`, { withCredentials: true, });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // // Fetch a single product by ID
    // async getProductById(productId) {
    //     try {
    //         const response = await axios.get(`${this.apiUrl}/${productId}`);
    //         return response.data;
    //     } catch (error) {
    //         this.handleError(error);
    //     }
    // }

    // Create a new product
    async createProduct(productData) {
        console.log("Product data in Service: ", productData);
        try {
            const response = await axios.post(`${this.Url}/addproduct`,
                productData,
                {
                    withCredentials: true, headers: { "Content-Type": "multipart/form-data", },
                });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // Update an existing product
    async updateProduct(productId, productData) {
        console.log("Update Product service: ", productId, productData);
        try {
            const response = await axios.patch(`${this.Url}/updateproduct/${productId}`,
                productData,
                {
                    withCredentials: true, headers: { "Content-Type": "multipart/form-data", },
                });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // Delete a product
    async deleteProduct(productId) {
        try {
            const response = await axios.delete(`${this.Url}/deleteproduct/${productId}`, { withCredentials: true });
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

const productService = new ProductService(); // Export a single instance of the ProductService class

export default productService;