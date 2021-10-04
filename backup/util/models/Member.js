const { model, Schema } = require('mongoose');

const MemberSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
  avatar: String,
  gender: String,
});

module.exports = model('Member', MemberSchema);
