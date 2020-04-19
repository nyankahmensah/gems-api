function MobileUserService({ ORM, utils }) {
  const login = async ({ password }) => {
    const existingMobileUser = await ORM.MobileUser.findOne({
      password
    });

    if (!existingMobileUser) {
      throw new Error("UserNotExist");
    }

    return await ORM.MobileUser.findByIdAndUpdate(existingMobileUser._id, {
      mobileToken: utils.hashPassword(new Date().toString())
    });
  };

  return {
    login
  };
}

module.exports = MobileUserService;
