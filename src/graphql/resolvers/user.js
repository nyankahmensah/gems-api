module.exports = {
  Mutation: {
    loginMobileUser: async (_, args, { broker }) =>
      broker.MobileUserService.login({
        password: args.password
      })
  },

  Query: {}
};
