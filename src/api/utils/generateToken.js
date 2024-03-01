require('dotenv').config();

const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret_key';

const generateToken = ({ id, name, email }) => {
  const token = jwt.sign({ id, name, email }, secret, {
    expiresIn: '15d',
    algorithm: 'HS256',
  });
  return token;
};

module.exports = generateToken;