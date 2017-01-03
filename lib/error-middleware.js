'use strict';

const createError = require('http-errors');
const debug = require('debug')('fomogram:error-middleware');

module.exports = function(err, req, res, next) {
  debug('error', err);

  if(err.status) {
    debug('user error', err.name);
    res.status(err.status).send(err.name);
    next();
    return;
  }

  if(err.status === 'ValidationError') {
    debug('ValidationError', err.name);
    err = createError(400, err.message);
    res.status(err.status).send(err.name);
    next();
    return;
  }

  if(err.status === 'CastError') {
    debug('CastError', err.name);
    err = createError(404, err.message);
    res.status(err.status).send(err.name);
    next();
    return;
  }

  debug('Server Error');
  err = createError(500, err.message);
  res.status(err.status).send(err.name);
  next();
};
