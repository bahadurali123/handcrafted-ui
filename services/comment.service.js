import axios from 'axios';
import config from '../config/configuration';
import errorHandler from '../src/utils/handleError';

console.log("Comment Service!");
export class CommentService {
  constructor() {
    this.apiUrl = `${config.backendBaseUrl}`; // base URL for comments API
  }

  // Fetch all comments
  async getAllComments() {
    try {
      const response = await axios.get(`${this.apiUrl}/comments`, { withCredentials: true, });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  //   // Fetch comments for a specific item by ID (e.g., product, post, review)
  //   async getCommentsByItemId(itemId) {
  //     try {
  //       const response = await axios.get(`${this.apiUrl}/item/${itemId}`);
  //       return response.data;
  //     } catch (error) {
  //       this.handleError(error);
  //     }
  //   }

  // Add a comment to an item
  async addComment(itemId, commentData) {
    // async addComment(itemId, userId, commentData) {
    try {
      // const response = await axios.post(`${this.apiUrl}/${itemId}/addcomment`, { itemId, userId, ...commentData });
      const response = await axios.post(`${this.apiUrl}/${itemId}/addcomment`, commentData, { withCredentials: true, });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Update an existing comment
  async updateComment(commentId, commentData) {
    try {
      console.log("Update comment service: ", commentId, commentData);
      const response = await axios.patch(`${this.apiUrl}/admin/comment/update/${commentId}`,
        commentData,
        { withCredentials: true, });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Delete a comment
  async deleteComment(commentId) {
    try {
      console.log("Delete comment service: ", commentId);
      const response = await axios.delete(`${this.apiUrl}/admin/comment/delete/${commentId}`,
        { withCredentials: true, });
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

const commentService = new CommentService(); // Export a single instance of the CommentService class

export default commentService;