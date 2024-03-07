const jwt = require('jsonwebtoken');
const { User } = require('../../database/models');
require('dotenv/config');

const secret = process.env.JWT_SECRET || 'secret_key';

module.exports = async (req, res, next) => {
try {
  const token = req.cookies.token || req.headers.authorization;
  console.log(token)
  if (!token) {
    return next({ type: 'TOKEN_ERROR', message: 'Token not found' });
  }

  const { email } = jwt.verify(token, secret);

  const user = await User.findOne(
    { where: { email }, attributes: { exclude: ['id', 'password'] } },
  );

  if (!user) {
    return next({ type: 'UNAUTHORIZED_USER', message: 'Expired or invalid token' });
  }
  
  req.user = user;

  next()
} catch (_error) {
  return next({ type: 'UNAUTHORIZED_USER', message: 'Expired or invalid token' });
  }
};