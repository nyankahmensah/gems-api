const { ApolloServer } = require("apollo-server-express");
const dotenv = require("dotenv");
const Sentry = require("@sentry/node");
const app = require("./app");
const schema = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const Broker = require("./broker");

// Middlewares
const injectBroker = require("./middlewares/injectBroker");

// REST API Routes
const routes = require("./rest/routes");

dotenv.config({
  path: "../env"
});

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: "https://cc4d4d44fc9f4e18a990976693666475@sentry.io/2813230"
  });
}

const startServer = async () => {
  // Starting Broker
  const broker = await Broker({
    databaseURI: process.env.DATABASE_URI
  });

  // Configuring graphQL server
  const server = new ApolloServer({
    context: async () => {
      return {
        broker
      };
    },
    typeDefs: [...schema],
    resolvers: {
      ...resolvers
    },
    introspection: true,
    playground: true,
    tracing: true
  });

  // Applying graphQL server to express server
  server.applyMiddleware({ app, path: "/graphql" });
  app.use(injectBroker({ broker }));
  app.use(routes);

  app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log("Server started successfully on Port", process.env.PORT);
  });
};

startServer().catch(e => {
  throw e;
});
