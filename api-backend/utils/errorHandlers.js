const boom = require('@hapi/boom');
const response = require('./responses');

function wrapErrors(err, req, res, next) {
  if (!err.isBoom) next(boom.badImplementation(err));
  next(err);
}

function errorHandler(err, req, res) {
  // eslint-disable-line
  const {
    output: { statusCode, payload }
  } = boom.internal();
  response.error(req, res, payload.message, statusCode);
}

function notFoundHandler(req, res) {
  const {
    output: { statusCode, payload }
  } = boom.notFound();
  response.error(req, res, payload.message, statusCode);
}

module.exports = {
  notFoundHandler,
  wrapErrors,
  errorHandler
};
