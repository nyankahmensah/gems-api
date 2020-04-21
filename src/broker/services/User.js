function UserService({ ORM }) {
  const login = async ({ email, password }) => {
    const existingUser = await ORM.User.findOne({
      email,
      password
    });

    if (!existingUser) {
      throw new Error("LoginFailure");
    }

    return existingUser;
  };

  const changePassword = async ({ email, currentPassword, newPassword }) => {
    const existingUser = await ORM.User.findOne({
      email,
      password: currentPassword
    });

    if (!existingUser) {
      throw new Error("IncorrectPassword");
    } else {
      return ORM.User.findByIdAndUpdate(existingUser._id, {
        password: newPassword
      });
    }
  };

  return {
    login,
    changePassword
  };
}

module.exports = UserService;
