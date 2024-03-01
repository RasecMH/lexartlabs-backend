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

      const answer = { name: user.name, email: user.email, token };
      return res.status(201).json(answer);
    } catch (error) {
      next(error);
    }
  }

  async findUser(req, res, next) {
    try {
      const { email, password } = req.body;

      const login = await this.serviceLogin.findUser(email, password);

      const token = generateToken(login);

      const answer = { ...login, token };

      return res.status(200).json(answer);
    } catch (error) {
      next(error);
    }
  }

  async remove(req, res, next) {
    try {
      const { id } = req.params; 
      await this.serviceLogin.remove(id);

      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = LoginController;