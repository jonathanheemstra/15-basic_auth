'use strict';
const debug = require('debug')('fomogram:after-controller');
const User = require('../../model/user.js');
const Gallery = require('../../model/gallery.js');
const mockData = require('./mockData.js');

module.exports = exports = {};

exports.removeUser = function(done) {
  User.remove({})
    .then( () => done())
    .catch(done);
};

exports.removeGalleryAndUser = function(done) {
  Promise.all([
    Gallery.remove({}),
    User.remove({})
  ])
  .then( () => done())
  .catch(done);
};

exports.deleteTestGalleryUserId = function() {
  delete mockData.testGallery.userID;
};
