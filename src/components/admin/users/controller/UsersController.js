import UsersRepository from '../repository/UsersRepository';

export default {
  async getAllUsers() {
    try {
      return await UsersRepository.getAllUsers();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  async getUserById(id) {
    try {
      return await UsersRepository.getUserById(id);
    } catch (error) {
      console.error(`Error fetching user with id ${id}:`, error);
      throw error;
    }
  },

  async createUser(userData) {
    try {
      return await UsersRepository.createUser(userData);
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  async updateUser(id, userData) {
    try {
      return await UsersRepository.updateUser(id, userData);
    } catch (error) {
      console.error(`Error updating user with id ${id}:`, error);
      throw error;
    }
  },

  async deleteUser(id) {
    try {
      return await UsersRepository.deleteUser(id);
    } catch (error) {
      console.error(`Error deleting user with id ${id}:`, error);
      throw error;
    }
  }
};