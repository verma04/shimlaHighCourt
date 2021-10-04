
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');
import { Request, Response, NextFunction }  from 'express';
const {
  cafeQueries,
  cafeMutations,
  eventsQueries,
  eventsMutations,
  userMutations,
  userQueries , cityMutations , cityQueries } = require('./resolvers');
const { cafeTypes, userTypes , eventsTypes , cityTypes } = require('./types');
const { buildAuthContext } = require('./context');


const User = require('./models/User');


exports.createApolloServer =  async (app:any) => {

  try {
  // Construct a schema, using GRAPHQL schema language
  const typeDefs = gql(`
  ${cafeTypes}
  ${userTypes}
  ${eventsTypes}
  ${cityTypes}

  type Query {
    city(id: ID): City
    cities: [City]
   cafe(id: ID): Cafe
    cafes: [Cafe]
    event(id: ID): Event
    events: [Event]
    user: User
  dogs : Dogs
  filterCafes(id: ID):[FilterCafe]
  filterCity(id: ID):City
  }

  type Mutation {
    createCity(input: CityInput): City,
    createCafe(input: CafeInput): Cafe,
    updateCafe(id: ID, input: CafeInput): Cafe
    deleteCafe(id: ID): ID
    createEvents(input: EventInput): Event
    signUp(input: SignUpInput): String
    signIn(input: SignInInput): User
    signOut: Boolean
  }`);

  // The root provides a resolver for each API endpoint
  const resolvers = {
    Query: {
      ...cafeQueries,
      ...userQueries,
      ...eventsQueries,
      ...cityQueries
    },
    Mutation: {
      ...cafeMutations,
      ...userMutations,
      ...eventsMutations,
      ...cityMutations
    }
  }

  const apolloServer = new ApolloServer({
    typeDefs, resolvers,
    context: ({req}:any) => ({
      ...buildAuthContext(req),
      models: {
        User: new User(mongoose.model('User')),
        Cafe: new User(mongoose.model('Cafe'))
      }
    })
  })
  await apolloServer.start();
   await apolloServer.applyMiddleware({ app:app });

  return apolloServer;

}
catch(err) {
  console.log(err)
}
}
