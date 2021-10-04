

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cafeSchema = new Schema({
  cafeavatar: { type: String, required: true, maxlength: 128 },
  cafename: { type: String, required: true, maxlength: 64 },
  cafephone: { type: String, required: true, maxlength: 128 },
  location: { type: String, required: true, maxlength: 128 },
  description: { type: String, required: true},
  slug: { type: String, required: true},
  user: { type: Schema.Types.ObjectId, ref: 'User'},
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Cafe', cafeSchema);
