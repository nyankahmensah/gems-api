const messageResolvers = require("./message");
const approvalResolvers = require("./approval");
const forecastResolvers = require("./forecast");
const userResolvers = require("./user");
const ussdSessionResolvers = require("./session");

const resolvers = {
  Mutation: {
    ...messageResolvers.Mutation,
    ...approvalResolvers.Mutation,
    ...forecastResolvers.Mutation,
    ...userResolvers.Mutation,
    ...ussdSessionResolvers.Mutation
  },

  Query: {
    ...messageResolvers.Query,
    ...approvalResolvers.Query,
    ...forecastResolvers.Query,
    ...userResolvers.Query,
    ...ussdSessionResolvers.Query
  }
};

module.exports = resolvers;
