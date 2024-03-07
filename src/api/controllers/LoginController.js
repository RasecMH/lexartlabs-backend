const LoginService = require('../services/LoginService');
const generateToken = require('../utils/generateToken');

class LoginController {
  constructor() {
    this.serviceLogin = new LoginService();
  }

  async createUser(req, res, next) {
    try {
      const { email, password, name } = req.body;
      const user = await this.serviceLogin.create({ email, password, name });

      const token = generateToken(user);

      return res.cookie('token', token).status(201).json({...user, token});;
    } catch (error) {
      next(error);
    }
  }

  async findUser(req, res, next) {
    try {
      const { email, password } = req.body;

      const login = await this.serviceLogin.findUser(email, password);

      const token = generateToken(login);
      return res.cookie('token', token).status(200).json({...login, token});
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params; 
      await this.serviceLogin.delete(id);

      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = LoginController;