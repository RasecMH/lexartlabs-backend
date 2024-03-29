const errorMap = {
  INVALID_FIELD: 422,
  ALREADY_REGISTERED: 409,
  TOKEN_ERROR: 401,
  NOT_FOUND: 404,
  UNAUTHORIZED_USER: 401,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};