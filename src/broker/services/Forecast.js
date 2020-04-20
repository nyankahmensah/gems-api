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
      return null;
    }

    return forecast[country];
  };

  const getForecastForDay = async ({ dateStart, dateEnd, phone }) => {
    const existingPhone = await ORM.USSDSession.findOne({
      phone
    });

    if (!existingPhone) {
      await ORM.USSDSession.save({
        phone,
        sessions: 1
      });
    } else {
      await ORM.USSDSession.findOneAndUpdate(
        { phone },
        {
          sessions: existingPhone.sessions + 1
        }
      );
    }
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
