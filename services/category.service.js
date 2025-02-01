import axios from 'axios';
import config from '../config/configuration';
import errorHandler from '../src/utils/handleError';

console.log("Category Service!");
export class CategoryService {
    constructor() {
        this.apiUrl = `${config.backendBaseUrl}`; // base URL for categories API
    }

    // Fetch all categories
    async getAllCategories() {
        try {
            const response = await axios.get(`${this.apiUrl}/getcategories`, { withCredentials: true, });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // Create a new category
    async createCategory(categoryData) {
        try {
            const response = await axios.post(`${this.apiUrl}/addcategory`, categoryData, { withCredentials: true, });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // Update an existing category
    async updateCategory(categoryId, categoryData) {
        try {
            const response = await axios.put(`${this.apiUrl}/updatecategory/${categoryId}`, categoryData, { withCredentials: true, });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // Delete a category
    async deleteCategory(categoryId) {
        try {
            const response = await axios.delete(`${this.apiUrl}/deletecategory/${categoryId}`, { withCredentials: true, });
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

const categoryService = new CategoryService(); // Export a single instance of the CategoryService class

export default categoryService;