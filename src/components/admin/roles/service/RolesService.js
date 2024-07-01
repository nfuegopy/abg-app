// src/components/roles/service/RolesService.js

import apiService from '@/services/api.service';

class RolesService {
  async getAllRoles() {
    return apiService.get('/roles');
  }

  async createRole(roleData) {
    return apiService.post('/roles', roleData);
  }

  async updateRole(id, roleData) {
    return apiService.patch(`/roles/${id}`, roleData);
  }

  async deleteRole(id) {
    return apiService.delete(`/roles/${id}`);
  }
}

export default new RolesService();