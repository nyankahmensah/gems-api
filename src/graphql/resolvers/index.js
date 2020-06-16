const messageResolvers = require("./message");
const approvalResolvers = require("./approval");
const forecastResolvers = require("./forecast");
const userResolvers = require("./user");
const ussdSessionResolvers = require("./session");
const countryResolvers = require("./country");
const pfzResolvers = require("./pfz");

const resolvers = {
  Mutation: {
    ...messageResolvers.Mutation,
    ...approvalResolvers.Mutation,
    ...forecastResolvers.Mutation,
    ...userResolvers.Mutation,
    ...ussdSessionResolvers.Mutation,
    ...countryResolvers.Mutation,
    ...pfzResolvers.Mutation
  },

  Query: {
    ...messageResolvers.Query,
    ...approvalResolvers.Query,
    ...forecastResolvers.Query,
    ...userResolvers.Query,
    ...ussdSessionResolvers.Query,
    ...countryResolvers.Query,
    ...pfzResolvers.Query
  }
};

module.exports = resolvers;
