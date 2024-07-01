import RolesService from '../service/RolesService';

export default {
  async getAllRoles(req, res) {
    try {
      const roles = await RolesService.getAllRoles();
      res.json(roles);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async createRole(req, res) {
    try {
      const role = await RolesService.createRole(req.body);
      res.status(201).json(role);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async updateRole(req, res) {
    try {
      const role = await RolesService.updateRole(req.params.id, req.body);
      res.json(role);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async deleteRole(req, res) {
    try {
      await RolesService.deleteRole(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};