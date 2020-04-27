function CountryService({ ORM, utils }) {
  const createCountryAccount = async args => {
    return ORM.Country.save({
      ...args,
      password: await utils.hashPassword(args.password)
    });
  };

  const loginCountryAccount = async args => {
    const existingCountry = await ORM.Country.findOne({
      email: args.email,
      password: args.password
    });

    if (!existingCountry) throw new Error("LoginFailure");

    const token = await utils.generateToken({
      payload: existingCountry.toObject(),
      secretKey: process.env.JWT_SECRET_KEY
    });


    return {
      token,
      countryAccount: existingCountry.toObject()
    };
  };

  const getCountryAccounts = () => ORM.Country.find({});

  return {
    createCountryAccount,
    getCountryAccounts,
    loginCountryAccount
  };
}

module.exports = CountryService;
