const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Run the server on a port specified in our .env file or port 4000
const port = process.env.PORT || 4000;

// Construct a schema, using GraphQL's schema language
const typeDefs = gql`
    type Query {
        hello: String
    }
`;

// Provide resolver functions for our schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello world!'
    }
};


async function startApolloServer(typeDefs, resolvers) {
  // Same ApolloServer initialization as before
  const server = new ApolloServer({ typeDefs, resolvers });

  // Required logic for integrating with Express
  await server.start();

  const app = express();

  // Apollo Server setup
  server.applyMiddleware({ app, path: '/api'});

  // Modified server startup
  await new Promise(resolve => app.listen({ port }, resolve));
  console.log(console.log(
    `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`));
};
