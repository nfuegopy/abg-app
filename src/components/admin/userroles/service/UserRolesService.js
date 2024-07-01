import apiService from '@/services/api.service';

const UserRolesService = {
  async getAllUserRoles() {
    return apiService.get('/user-roles');
  },

  async getUserRole(userId, roleId) {
    return apiService.get(`/user-roles/${userId}/${roleId}`);
  },

  async createUserRole(userRoleData) {
    return apiService.post('/user-roles', userRoleData);
  },

  async updateUserRole(userId, roleId, userRoleData) {
    return apiService.patch(`/user-roles/${userId}/${roleId}`, userRoleData);
  },

  async deleteUserRole(userId, roleId) {
    return apiService.delete(`/user-roles/${userId}/${roleId}`);
  }
};

export default UserRolesService;