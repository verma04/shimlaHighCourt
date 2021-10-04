

const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const config = require('../config/dev');

require('./models/Cafes');
require('./models/user');

exports.connect = () => {
  mongoose.connect('mongodb+srv://123:123@cluster0.ypxg2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }, () => {
    console.log('Connected to DB')
  })
}

exports.initSessionStore = () => {
  const store = new MongoDBStore({
    uri: 'mongodb+srv://123:123@cluster0.ypxg2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    collection: 'uersSessions'
  });

  return store;
}
