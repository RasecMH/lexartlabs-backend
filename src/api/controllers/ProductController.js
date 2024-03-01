const ProductService = require('../services/ProductService');

class ProductController {
  constructor() {
    this.service = new ProductService();
  }

  async create(req, res, next) {
    try {
      const { products } = req.body;

      const newProducts = await Promise.all(products.map(async (product) => {
        const newProduct = await this.service.create(product);

        return {
          ...newProduct.dataValues,
        };
      }));

      return res.status(201).json({ products: newProducts });
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

  async update(req, res, next) {
    try {
      const { product } = req.body;
      await this.service.update(product);
      
      const products = await this.service.getAll();

      const productsUpdate = { ...products.dataValues };

      return res.status(200).json(productsUpdate);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;