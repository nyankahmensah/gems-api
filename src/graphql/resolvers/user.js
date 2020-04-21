module.exports = {
  Mutation: {
    loginMobileUser: async (_, args, { broker }) =>
      broker.MobileUserService.login({
        password: args.password
      }),

    loginUser: async (_, args, { broker }) => broker.UserService.login(args),

    changeUserPassword: async (_, args, { broker }) =>
      broker.UserService.changePassword(args)
  },

  Query: {}
};
