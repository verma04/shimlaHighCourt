const { model, Schema } = require('mongoose');

const MemberSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
  avatar: String,
  gender: String,
});

const Member = model('Member', MemberSchema);

export { Member}