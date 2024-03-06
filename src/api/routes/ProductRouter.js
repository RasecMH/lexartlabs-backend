const express = require('express');
const ProductController = require('../controllers/ProductController');
const { tokenValidation, productValidation } = require('../middlewares');

const productRouter = express.Router();
const productController = new ProductController();

productRouter.get(
  '/search',
  (req, res, next) => tokenValidation(req, res, next),
  (req, res, next) => productController.getBySearchTerm(req, res, next),
);
productRouter.get(
  '/',
  (req, res, next) => tokenValidation(req, res, next),
  (req, res, next) => productController.getAll(req, res, next),
);
productRouter.get(
  '/:id',
  (req, res, next) => tokenValidation(req, res, next),
  (req, res, next) => productController.getById(req, res, next),
);
productRouter.post(
  '/create',
  (req, res, next) => tokenValidation(req, res, next),
  (req, res, next) => productValidation(req, res, next),
  (req, res, next) => productController.create(req, res, next),
);
productRouter.put(
  '/update',
  (req, res, next) => tokenValidation(req, res, next),
  (req, res, next) => productValidation(req, res, next),
  (req, res, next) => productController.update(req, res, next),
);
productRouter.delete(
  '/delete/:id',
  (req, res, next) => tokenValidation(req, res, next),
  (req, res, next) => productController.delete(req, res, next),
);

module.exports = productRouter;
