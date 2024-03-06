const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(6).required(),
});

const newUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(6).required(),
});

const oldProductPayloadSchema = Joi.object({
  id: Joi.number(),
  name: Joi.string().required(),
  brand: Joi.string().required(),
  model: Joi.string().required(),
  price: Joi.number().required(),
  color: Joi.string().required(),
});

const newProductPayloadSchema = Joi.object({
  id: Joi.number(),
  name: Joi.string().required(),
  details: {
    brand: Joi.string().required(),
    model: Joi.string().required(),
    color: Joi.string().required(),
  },
  price: Joi.number().required(),
});

const bulkProductPayloadSchema = Joi.array().items({
  id: Joi.number(),
  name: Joi.string().required(),
  brand: Joi.string().required(),
  model: Joi.string().required(),
  data: Joi.array().items({
    price: Joi.number().required(),
    color: Joi.string().required(),
  }),
});

module.exports = {
  loginSchema,
  newUserSchema,
  oldProductPayloadSchema,
  newProductPayloadSchema,
  bulkProductPayloadSchema
};