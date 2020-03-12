module.exports = {
  Mutation: {},

  Query: {
    forecastByCountryAndDay: async (_, args, { broker }) => {
      const forecast = broker.ForecastService.getForecastByCountryAndDay(
        args.input
      );
      return {
        forecastMessage: forecast
      };
    }
  }
};
