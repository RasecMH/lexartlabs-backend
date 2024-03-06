const md5 = require('md5');
const { User } = require('../../database/models');
const CustomError = require('../utils/CustomError');

class loginService {
  constructor() { this.model = User; }

  async create({ email, password, name }) {
   const userExist = await this.model.findOne({ where: { email } });

    if (userExist) throw new CustomError('ALREADY_REGISTERED', 'user not available');

    const result = await this.model.create({
      email,
      password: md5(password),
      name,
    });
  
    return { id: result.id, email, name };
  }

 async findUser(email, password) {
  const passwordCompare = md5(password);
  const user = await this.model.findOne({ 
    where: { email, password: passwordCompare }, 
    attributes: { exclude: ['password'] }, 
  });

  if (!user) throw new CustomError('NOT_FOUND', 'Incorrect username or password');

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
  }

  async delete(id) {
    await this.model.destroy({
      where: { id },
    });
    }
}

module.exports = loginService;