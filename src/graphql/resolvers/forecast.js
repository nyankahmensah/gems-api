module.exports = {
  Mutation: {},

  Query: {
    forecastByCountryAndDay: async (_, args, { broker }) => {
      return await broker.ForecastService.getForecastByCountryAndDay(
        args.input
      );
    }
  }
};
