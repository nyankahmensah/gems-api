const messageResolvers = require("./message");
const approvalResolvers = require("./approval");
const forecastResolvers = require("./forecast");

const resolvers = {
  Mutation: {
    ...messageResolvers.Mutation,
    ...approvalResolvers.Mutation,
    ...forecastResolvers.Mutation,
  },

  Query: {
    ...messageResolvers.Query,
    ...approvalResolvers.Query,
    ...forecastResolvers.Query,
  },
};

module.exports = resolvers;
