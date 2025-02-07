const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
import { mergeResolvers } from "./resolvers";
import { mergeTypes } from "./typeDefs";

const server = new ApolloServer({
  typeDefs: mergeTypes,
  resolvers: mergeResolvers,
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log("Now browse to http://localhost:4000" + server.graphqlPath)
);
