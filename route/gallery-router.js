'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const createError =require('http-errors');
const debug = require('debug')('fomogram:gallery-router');

const Gallery = require('../model/gallery.js');
const bearer = require('../lib/bearer-middleware.js');

const galleryRouter = module.exports = Router();

galleryRouter.post('/api/gallery', bearer, jsonParser, function(req, res, next) {
  debug('POST: /api/gallery');

  req.body.userID = req.user._id;
  new Gallery(req.body).save()
    .then( gallery => res.json(gallery))
    .catch(next);
});

galleryRouter.get('/api/gallery/:id', bearer, function(req, res, next) {
  debug('GET: /api/gallery/:id');

  Gallery.findById(req.params.id)
    .then( gallery => {
      if(gallery.userID.toString() !== req.user._id.toString()) {
        return next(createError(401, 'invalid user'));
      }
      return res.json(gallery);
    })
    .catch(next);
});

galleryRouter.put('/api/gallery/:id', function(req, res, next) {
  debug('PUT: /api/gallery/:id');
});

galleryRouter.delete('/api/gallery/:id', function(req, res, next) {
  debug('DELETE: /api/gallery/:id');
});
