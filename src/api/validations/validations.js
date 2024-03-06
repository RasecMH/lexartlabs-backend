const {
  loginSchema,
  newUserSchema,
  oldProductPayloadSchema,
  newProductPayloadSchema,
  bulkProductPayloadSchema
} = require('./schemas');

const validateLogin = (payload) => {
  const { error } = loginSchema.validate(payload);

  if (error) {
    return {
      type: 'INVALID_FIELD',
      message: 'field invalid',
    };
  }
  return { type: null };
};

const validateNewUser = (payload) => {
  const { error } = newUserSchema.validate(payload);

  if (error) {
    return {
      type: 'INVALID_FIELD',
      message: 'field invalid',
    };
  }
  return { type: null };
};

const validateOldProductPayload = (payload) => {
  const { error } = oldProductPayloadSchema.validate(payload);

  if (error) {
    return {
      type: 'INVALID_FIELD',
      message: 'field invalid',
    };
  }
  return { type: null };
};

const validateNewProductPayload = (payload) => {
  const { error } = newProductPayloadSchema.validate(payload);

  if (error) {
    return {
      type: 'INVALID_FIELD',
      message: 'field invalid',
    };
  }
  return { type: null };
};
const validateBulkProductPayload = (payload) => {
  const { error } = bulkProductPayloadSchema.validate(payload);

  if (error) {
    return {
      type: 'INVALID_FIELD',
      message: 'field invalid',
    };
  }
  return { type: null };
};

module.exports = {
  validateLogin,
  validateNewUser,
  validateOldProductPayload,
  validateNewProductPayload,
  validateBulkProductPayload
};
