const express = require('express');
const ProductController = require('../controllers/ProductController');

const productRouter = express.Router();
const productController = new ProductController();

productRouter.get('/', (req, res, next) => productController.getAll(req, res, next));
productRouter.get('/:id', (req, res, next) => productController.getById(req, res, next));
productRouter.route('/create')
  .post((req, res, next) => productController.create(req, res, next));

module.exports = productRouter;