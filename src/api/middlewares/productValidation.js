const {
  validateBulkProductPayload,
  validateNewProductPayload,
  validateOldProductPayload,
} = require('../validations/validations');

module.exports = (req, _res, next) => {
  const validationQueue = [
    validateBulkProductPayload,
    validateNewProductPayload,
    validateOldProductPayload,
  ];

  let error = true;
  for (let i = 0; i < validationQueue.length; i += 1) {
    const validate = validationQueue[i](req.body);
    if (!validate.type) {
      error = false;
      break
    }else {
      error = validate
    }
  }

  if(error){
    return next(error)
  }

  return next();
};
