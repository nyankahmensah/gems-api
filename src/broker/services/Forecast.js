function ForecastService({ ORM }) {
  const createForecast = async ({
    ghana,
    benin,
    togo,
    capeVerde,
    guineaBissau,
    saoTomePrincipe,
    coteDivoire,
    guinea,
    mauritania,
    liberia,
    nigeria,
    sierraLeone,
    senegal,
    gambia,
    effectiveDate
  }) => {
    try {
      return ORM.Forecast.save({
        ghana,
        benin,
        togo,
        capeVerde,
        guineaBissau,
        saoTomePrincipe,
        coteDivoire,
        guinea,
        mauritania,
        liberia,
        nigeria,
        sierraLeone,
        senegal,
        gambia,
        effectiveDate
      });
    } catch (e) {
      throw e;
    }
  };
  const getForecast = async filter => ORM.Forecast.find(filter);
  const getForecastForDay = async ({ dateStart, dateEnd }) => {
    return ORM.Forecast.findOne({
      effectiveDate: {
        $gte: dateStart,
        $lt: dateEnd
      }
    });
  };

  const broadcastForecast = async ({ category }) =>
    ORM.Forecast.findOne({ category });

  return { createForecast, getForecastForDay, broadcastForecast, getForecast };
}

module.exports = ForecastService;
