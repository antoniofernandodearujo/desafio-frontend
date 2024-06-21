import axios from "axios";

class UserApi {
  baseURL: string;

  constructor() {
    this.baseURL = "http://localhost:8080/api/v1"; // Atualize com a URL do seu backend
  }

  async fetchUsers() {
    try {
      const response = await axios.get(`${this.baseURL}/users`);
      return response.data.users;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }

  async fetchUserById(id: string) {
    try {
      const response = await axios.get(`${this.baseURL}/users/${id}`);
      return response.data.user;
    } catch (error) {
      console.error(`Error fetching user with ID ${id}:`, error);
      throw error;
    }
  }

  async createUser(userData: any) {
    try {
      const response = await axios.post(`${this.baseURL}/users/create`, userData);
      return response.data.user;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  async updateUser(id: string, userData: any) {
    try {
      const response = await axios.put(`${this.baseURL}/users/${id}`, userData);
      return response.data.user;
    } catch (error) {
      console.error(`Error updating user with ID ${id}:`, error);
      throw error;
    }
  }

  async deleteUser(id: string) {
    try {
      const response = await axios.delete(`${this.baseURL}/users/${id}`);
      return response.data.message;
    } catch (error) {
      console.error(`Error deleting user with ID ${id}:`, error);
      throw error;
    }
  }

  async fetchUserAlbums(userId: string) {
    try {
      const response = await axios.get(`${this.baseURL}/users/${userId}/albums`);
      return response.data.albums;
    } catch (error) {
      console.error(`Error fetching albums for user with ID ${userId}:`, error);
      throw error;
    }
  }

  async addUserAlbum(userAlbumData: any) {
    try {
      const response = await axios.post(`${this.baseURL}/albums/save`, userAlbumData);
      return response.data.album;
    } catch (error) {
      console.error("Error adding album to user:", error);
      throw error;
    }
  }

  async removeUserAlbum(userId: string, albumId: string) {
    try {
      const response = await axios.delete(`${this.baseURL}/users/${userId}/albums/${albumId}`);
      return response.data.message;
    } catch (error) {
      console.error(`Error removing album ${albumId} from user ${userId}:`, error);
      throw error;
    }
  }

  async getUserByUsername(username: string) {
    try {
      const response = await axios.get(`${this.baseURL}/users/${username}`);
      return response.data.user;
    } catch (error) {
      console.error(`Error fetching user with username ${username}:`, error);
      throw error;
    }
  }
}

export default new UserApi();
