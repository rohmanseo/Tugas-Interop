import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://notes-management.herokuapp.com/api/';

class UserService {
  getNotes() {
    return axios.get(API_URL + 'note', { headers: authHeader() });
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
