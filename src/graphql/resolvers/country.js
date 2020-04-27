module.exports = {
  Mutation: {
    createCountryAccount: async (_, args, { broker }) =>
      broker.CountryService.createCountryAccount(args.input),

    loginCountryAccount: async (_, args, { broker }) =>
      broker.CountryService.loginCountryAccount(args.input)
  },

  Query: {
    countryAccounts: async (_, args, { broker }) =>
      broker.CountryService.getCountryAccounts()
  }
};
