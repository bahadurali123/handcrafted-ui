import config from '../config/configuration';
import axios from 'axios';
import errorHandler from '../src/utils/handleError';

console.log("Blog Service!");
export class ApiService {
    constructor(resource) {
        this.resource = resource;
        this.Url = `${config.backendBaseUrl}/admin`;
        this.baseUrl = `${config.backendBaseUrl}/blog`;
    }

    // GET: Fetch all resources
    async getAllBlogs() {
        try {
            console.log("Blogs Service: ");
            const response = await axios.get(`${this.baseUrl}s`, { withCredentials: true, });
            // console.log("IN Service: ", response.data);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // GET: Fetch a single resource by ID
    async getPost(data) {
        try {
            const response = await axios.get(`${this.baseUrl}/${data}`, { withCredentials: true, });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // POST: Create a new resource
    async createPost(data) {
        console.log("Blog data in Service: ", data);
        try {
            const response = await axios
                .post(`${this.Url}/addblog`,
                    data,
                    {
                        withCredentials: true, headers: { "Content-Type": "multipart/form-data", },
                    });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // PUT: Update a resource by ID
    async updateBlog(Id, data) {
        try {
            const response = await axios.patch(`${this.Url}/updateblog/${Id}`,
                data,
                {
                    withCredentials: true, headers: { "Content-Type": "multipart/form-data", },
                }
            );
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // DELETE: Delete a resource by ID
    async deleteBlog(id) {
        console.log("Delete blog service: ", id);
        try {
            const response = await axios.delete(`${this.Url}/deleteblog/${id}`, { withCredentials: true });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // Centralized error handling
    handleError(error) {
        console.log("Error hnadler", error);
        errorHandler(error);
    }
}

const BlogService = new ApiService();

export default BlogService;