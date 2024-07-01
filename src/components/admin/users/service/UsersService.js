import apiService from '@/services/api.service';

const UsersService = {
  async getAllUsers() {
    return apiService.get('/users');
  },

  async getUserById(id) {
    return apiService.get(`/users/${id}`);
  },

  async createUser(userData) {
    return apiService.post('/users', userData);
  },

  async updateUser(id, userData) {
    return apiService.patch(`/users/${id}`, userData);
  },

  async deleteUser(id) {
    return apiService.delete(`/users/${id}`);
  }
};

export default UsersService;