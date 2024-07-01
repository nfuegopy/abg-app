// src/services/AuthService.js

import apiService from './api.service';

class AuthService {
  async login(email, password) {
    const response = await apiService.post('/auth/login', { email, password });
    if (response.data.access_token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();