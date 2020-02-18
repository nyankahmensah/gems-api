const messageResolvers = require("./message");
const approvalResolvers = require("./approval");

const resolvers = {
  Mutation: {
    ...messageResolvers.Mutation,
    ...approvalResolvers.Mutation
  },

  Query: {
    ...messageResolvers.Query,
    ...approvalResolvers.Query
  }
};

module.exports = resolvers;
