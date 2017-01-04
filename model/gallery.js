'use strict';

const Schema = mongoose.Schema;
const mongoose = require('mongoose');

const gallerySchema = Schema({
  name: { type: String, required: true },
  description: { type: String },
  dateCreated: { type: Date, required: true, default: Date.now},
  userID: { type: Schema.Types.ObjectId, required: true}
});

module.exports = mongoose.model('gallery', gallerySchema);
