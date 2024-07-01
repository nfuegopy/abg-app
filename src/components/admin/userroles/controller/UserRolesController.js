import UserRolesRepository from '../repository/UserRolesRepository';

export default {
  async getAllUserRoles() {
    try {
      return await UserRolesRepository.getAllUserRoles();
    } catch (error) {
      console.error('Error fetching user roles:', error);
      throw error;
    }
  },

  async getUserRole(userId, roleId) {
    try {
      return await UserRolesRepository.getUserRole(userId, roleId);
    } catch (error) {
      console.error(`Error fetching user role for user ${userId} and role ${roleId}:`, error);
      throw error;
    }
  },

  async createUserRole(userRoleData) {
    try {
      return await UserRolesRepository.createUserRole(userRoleData);
    } catch (error) {
      console.error('Error creating user role:', error);
      throw error;
    }
  },

  async updateUserRole(userId, roleId, userRoleData) {
    try {
      return await UserRolesRepository.updateUserRole(userId, roleId, userRoleData);
    } catch (error) {
      console.error(`Error updating user role for user ${userId} and role ${roleId}:`, error);
      throw error;
    }
  },

  async deleteUserRole(userId, roleId) {
    try {
      return await UserRolesRepository.deleteUserRole(userId, roleId);
    } catch (error) {
      console.error(`Error deleting user role for user ${userId} and role ${roleId}:`, error);
      throw error;
    }
  }
};