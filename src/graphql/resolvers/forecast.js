module.exports = {
  Mutation: {},

  Query: {
    getForecastByCountryAndDay: async (_, args, { broker }) =>
      broker.ForecastService.getForecastByCountryAndDay(args.input)
  }
};
