
import  express from 'express';
import { Request, Response, NextFunction }  from 'express';

const bodyParser = require("body-parser");

const mongoose  = require('mongoose')



const cors = require('cors')


const path = require('path');
const app = express();
// Connect Database
const db = require('./database')
db.connect();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: '50mb'
  
  })
);

app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json());
app.use(cors())

// DB Config

// Connect to MongoDB

// Passport middleware
require('./middlewares').init(app, db);

const apolloServer = require('./graphql').createApolloServer(app);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// Passport config


// Routes



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));