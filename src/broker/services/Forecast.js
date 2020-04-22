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
    effectiveDate,
    oceanStateImage
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
        effectiveDate,
        oceanStateImage
      });
    } catch (e) {
      throw e;
    }
  };
  const getForecast = async filter => ORM.Forecast.find(filter);

  const getForecastByCountryAndDay = async ({
    country,
    startDate,
    endDate
  }) => {
    const forecast = await ORM.Forecast.findOne({
      effectiveDate: {
        $gte: new Date(startDate).setHours(0, 0, 0),
        $lt: new Date(endDate).setHours(23, 59, 59)
      }
    });

    if (!forecast) {
      return {
        forecastMessage: null,
        imageURL: null
      };
    }

    return {
      forecastMessage: forecast[country],
      imageURL: forecast.imageURL
    };
  };

  const getForecastForDay = async ({ dateStart, dateEnd, phone, network }) => {
    await ORM.USSDSession.save({
      phone,
      network
    });

    return ORM.Forecast.findOne({
      effectiveDate: {
        $gte: new Date(dateStart),
        $lt: dateEnd
      }
    });
  };

  const broadcastForecast = async ({ category }) =>
    ORM.Forecast.findOne({ category });

  return {
    createForecast,
    getForecastForDay,
    broadcastForecast,
    getForecast,
    getForecastByCountryAndDay
  };
}

module.exports = ForecastService;
