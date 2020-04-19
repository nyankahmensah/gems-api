function MobileUserService({ ORM, utils }) {
  const login = async ({ password }) => {
    const existingMobileUser = await ORM.MobileUser.findOne({
      password
    });

    if (!existingMobileUser) {
      throw new Error("UserNotExist");
    }

    return {
      user: existingMobileUser
    };
  };

  return {
    login
  };
}

module.exports = MobileUserService;
