

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
  cityAvatar: { type: String, required: true },
  cityName: { type: String, required: true, maxlength: 128 },
  cityDescription: { type: String, required: true},
  slug: { type: String, required: true},
 
})

module.exports = mongoose.model('City', citySchema);