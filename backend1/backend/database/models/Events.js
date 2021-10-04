

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventAvatar: { type: String, required: true, maxlength: 128 },
  eventName: { type: String, required: true, maxlength: 64 },
  location: { type: String, required: true, maxlength: 128 },
  description: { type: String, required: true},
  user: { type: Schema.Types.ObjectId, ref: 'User'},
  startDate: { type: String, required: true},
  endDate: { type: String, required: true},
  slug: { type: String, required: true},
})

module.exports = mongoose.model('Event', eventSchema);
