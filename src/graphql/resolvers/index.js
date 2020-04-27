const messageResolvers = require("./message");
const approvalResolvers = require("./approval");
const forecastResolvers = require("./forecast");
const userResolvers = require("./user");
const ussdSessionResolvers = require("./session");
const countryResolvers = require("./country");

const resolvers = {
  Mutation: {
    ...messageResolvers.Mutation,
    ...approvalResolvers.Mutation,
    ...forecastResolvers.Mutation,
    ...userResolvers.Mutation,
    ...ussdSessionResolvers.Mutation,
    ...countryResolvers.Mutation
  },

  Query: {
    ...messageResolvers.Query,
    ...approvalResolvers.Query,
    ...forecastResolvers.Query,
    ...userResolvers.Query,
    ...ussdSessionResolvers.Query,
    ...countryResolvers.Query
  }
};

module.exports = resolvers;
