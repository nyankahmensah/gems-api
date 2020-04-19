const messageResolvers = require("./message");
const approvalResolvers = require("./approval");
const forecastResolvers = require("./forecast");
const userResolvers = require("./user");

const resolvers = {
  Mutation: {
    ...messageResolvers.Mutation,
    ...approvalResolvers.Mutation,
    ...forecastResolvers.Mutation,
    ...userResolvers.Mutation
  },

  Query: {
    ...messageResolvers.Query,
    ...approvalResolvers.Query,
    ...forecastResolvers.Query,
    ...userResolvers.Query
  }
};

module.exports = resolvers;
