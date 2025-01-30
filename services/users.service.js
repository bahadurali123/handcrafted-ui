import config from '../config/configuration';
import axios from 'axios';
import errorHandler from '../src/utils/handleError';

console.log("User Service!");
export class UserService {
    constructor() {
        this.apiUrl = `${config.backendBaseUrl}/user`; // base URL for users API
        this.Url = `${config.backendBaseUrl}/admin`;
    }

    // Fetch all users
    async getAllUsers() {
        try {
            console.log("Get Users Service!");
            const response = await axios.get(`${this.Url}/users`,
                // { withCredentials: true, }
                {
                    withCredentials: true, headers: { "Content-Type": "multipart/form-data", },
                }
            );
            console.log("Users service: ", response);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    //   // Fetch a specific user by ID
    //   async getUserById(userId) {
    //     try {
    //       const response = await axios.get(`${this.apiUrl}/${userId}`);
    //       return response.data;
    //     } catch (error) {
    //       this.handleError(error);
    //     }
    //   }

    // Update an existing user
    async updateUser(userData) {
        try {
            const response = await axios.patch(`${this.apiUrl}/update`,
                userData,
                { withCredentials: true, }
            );
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // Update user status from admin
    async updateUserStatus(userId, userData) {
        try {
            const response = await axios.patch(`${this.Url}/user/update/${userId}`,
                userData,
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

const userService = new UserService(); // Export a single instance of the UserService class

export default userService;