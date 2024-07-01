import apiService from '@/services/api.service';

export default {
  async getAllRoles() {
    return apiService.get('/roles');
  },

  async createRole(roleData) {
    return apiService.post('/roles', roleData);
  },

  async updateRole(id, roleData) {
    return apiService.patch(`/roles/${id}`, roleData);
  },

  async deleteRole(id) {
    return apiService.delete(`/roles/${id}`);
  },
};