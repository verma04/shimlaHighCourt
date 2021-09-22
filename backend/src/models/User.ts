const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
 role: String,
 
});

 const User = model('User', userSchema);


 export { User}