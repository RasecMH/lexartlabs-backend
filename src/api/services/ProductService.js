const { Product } = require('../../database/models');
const { Op } = require('sequelize');
const CustomError = require('../utils/CustomError');

class ProductService {
  constructor() {
    this.model = Product;
  }

  async create(product) {
    const newProduct = await this.model.create(product);
    return newProduct;
  }

  async getAll() {
    const products = await this.model.findAll();
    return products;
  }

  async getById(id) {
    const product = await this.model.findOne({ where: { id } });

    if (product) return product;
    throw new CustomError('NOT_FOUND', 'Product not found');
  }

  async getBySearchTerm(query) {
    const products = await this.model.findAll({ where: { name: { [Op.iLike]: `%${query}%` } } });
    return products;
  }

  async update({ id, name, brand, model, price, color }) {
    const updatedProduct = await this.model.update(
      { name, brand, model, price, color },
      { where: { id } }
    );

    if (updatedProduct) return updatedProduct;
    throw new CustomError('NOT_FOUND', 'Product not found');
  }

  async delete(id) {
    await this.model.destroy({
      where: { id },
    });
  }
}

module.exports = ProductService;
