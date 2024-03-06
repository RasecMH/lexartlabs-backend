const ProductService = require('../services/ProductService');
const payloadSerializer = require('../utils/Serializer');


class ProductController {
  constructor() {
    this.service = new ProductService();
  }

  async create(req, res, next) {
    try {
      const productsSerialized = payloadSerializer(req.body);
      console.log(productsSerialized);

      await Promise.all(productsSerialized.map(async (product) => {
        await this.service.create(product);
      }));

      const allProducts = await this.service.getAll();

      return res.status(201).json( allProducts );
    } catch (error) {
      next(error);
    }
  }

   async getAll(_req, res, next) {
    try {
      const products = await this.service.getAll();
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    const { id } = req.params;
    try {
      const product = await this.service.getById(id);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  async getBySearchTerm(req, res, next) {
    const { q } = req.query;
    try {
      const products = await this.service.getBySearchTerm(q || '');
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const productsSerialized = payloadSerializer(req.body);

      await Promise.all(productsSerialized.map(async (product) => {
        console.log(product)
        await this.service.update(product);
      }));

      const products = await this.service.getAll();

      return res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await this.service.delete(id);

      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;