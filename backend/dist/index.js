"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const { ApolloServer, PubSub } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const graphql_disable_introspection_1 = __importDefault(require("graphql-disable-introspection"));
const PORT = process.env.port || 5000;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    validationRules: [graphql_disable_introspection_1.default],
    cors: {
        origin: true
    },
    // so we can access the request body in the context, so we can do stuff like checking for authentication in protected routes
    context: ({ req }) => ({ req }),
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
    .then((res) => {
    console.log(`Server running at 5000`);
})
    .catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map