import axios from "axios";

class AlbumApi {
  baseURL: string;

  constructor() {
    this.baseURL = "http://localhost:8080/api/v1"; // Atualize com a URL do seu backend
  }

  async fetchAlbums() {
    try {
      const response = await axios.get(`${this.baseURL}/albums`);
      return response.data.albums;
    } catch (error) {
      console.error("Error fetching albums:", error);
      throw error;
    }
  }

  async fetchAlbumById(id: string) {
    try {
      const response = await axios.get(`${this.baseURL}/albums/${id}`);
      return response.data.album;
    } catch (error) {
      console.error(`Error fetching album with ID ${id}:`, error);
      throw error;
    }
  }

  async createAlbum(albumData: any) {
    try {
      const response = await axios.post(`${this.baseURL}/albums/create`, albumData);
      return response.data.album;
    } catch (error) {
      console.error("Error creating album:", error);
      throw error;
    }
  }

  async updateAlbum(id: string, albumData: any) {
    try {
      const response = await axios.put(`${this.baseURL}/albums/${id}`, albumData);
      return response.data.album;
    } catch (error) {
      console.error(`Error updating album with ID ${id}:`, error);
      throw error;
    }
  }

  async deleteAlbum(id: string) {
    try {
      const response = await axios.delete(`${this.baseURL}/albums/${id}`);
      return response.data.message;
    } catch (error) {
      console.error(`Error deleting album with ID ${id}:`, error);
      throw error;
    }
  }

  async fetchAlbumsByUserId(userId: string) {
    try {
      const response = await axios.get(`${this.baseURL}/users/${userId}/albums`);
      return response.data.albums;
    } catch (error) {
      console.error(`Error fetching albums for user with ID ${userId}:`, error);
      throw error;
    }
  }

  async addAlbumToUser(userAlbumData: any) {
    try {
      const response = await axios.post(`${this.baseURL}/albums/save`, userAlbumData);
      return response.data.album;
    } catch (error) {
      console.error("Error adding album to user:", error);
      throw error;
    }
  }

  async removeAlbumFromUser(userId: string, albumId: string) {
    try {
      const response = await axios.delete(`${this.baseURL}/users/${userId}/albums/${albumId}`);
      return response.data.message;
    } catch (error) {
      console.error(`Error removing album ${albumId} from user ${userId}:`, error);
      throw error;
    }
  }
}

export default new AlbumApi();
