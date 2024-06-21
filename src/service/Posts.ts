import axios from "axios";

class PostsApi {
  baseURL: string;

  constructor() {
    this.baseURL = "http://localhost:8080/api/v1"; // Atualize com a URL do seu backend
  }

  async fetchPosts() {
    try {
      const response = await axios.get(`${this.baseURL}/posts`);
      return response.data.posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }

  async fetchPostById(id: string) {
    try {
      const response = await axios.get(`${this.baseURL}/posts/${id}`);
      return response.data.post;
    } catch (error) {
      console.error(`Error fetching post with ID ${id}:`, error);
      throw error;
    }
  }

  async createPost(postData: any) {
    try {
      const response = await axios.post(`${this.baseURL}/posts/create`, postData);
      return response.data.post;
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  }

  async updatePost(id: string, postData: any) {
    try {
      const response = await axios.put(`${this.baseURL}/posts/${id}`, postData);
      return response.data.post;
    } catch (error) {
      console.error(`Error updating post with ID ${id}:`, error);
      throw error;
    }
  }

  async deletePost(id: string) {
    try {
      const response = await axios.delete(`${this.baseURL}/posts/${id}`);
      return response.data.message;
    } catch (error) {
      console.error(`Error deleting post with ID ${id}:`, error);
      throw error;
    }
  }

  async fetchPostsByUserId(userId: string) {
    try {
      const response = await axios.get(`${this.baseURL}/users/${userId}/posts`);
      return response.data.posts;
    } catch (error) {
      console.error(`Error fetching posts for user with ID ${userId}:`, error);
      throw error;
    }
  }
}

export default new PostsApi();
