/* eslint-disable no-console */
const { ApolloServer, PubSub } = require('apollo-server');
const mongoose = require('mongoose');
import { Request, Response } from 'express';
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');



const PORT = process.env.port || 5000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // so we can access the request body in the context, so we can do stuff like checking for authentication in protected routes
  context: ({ req }:any) => ({ req}),
});

mongoose
  .connect('mongodb+srv://123:123@cluster0.f8tyn.mongodb.net/web?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Connected');
  
    return server.listen({ port: PORT });
  })
  .then((res:Response) => {
    console.log(`Server running at 5000`);
  })


  
  .catch((err:any) => {
    console.error(err);
  });
