const express = require('express');
const LoginController = require('../controllers/LoginController');

const {
  newUserValidation,
  loginValidation,
  tokenValidation,
} = require('../middlewares');

const loginRouter = express.Router();
const loginController = new LoginController();

loginRouter.get(
  '/validate', 
  (req, res, next) => tokenValidation(req, res, next),
  (req, res, next) => res.sendStatus(200)
  );

loginRouter.post(
  '/register',
  (req, res, next) => newUserValidation(req, res, next),
  (req, res, next) => loginController.createUser(req, res, next),
);

loginRouter.post(
  '/login',
  (req, res, next) => loginValidation(req, res, next),
  (req, res, next) => loginController.findUser(req, res, next),
);

loginRouter.delete(
  '/:id',
  (req, res, next) => tokenValidation(req, res, next),
  (req, res, next) => loginController.delete(req, res, next),
);

module.exports = loginRouter;
