const utils = require("../broker/utils");

// Resolves user with auth token
const resolveUser = async ({ token }) => {
  try {
    return await utils.validateToken({
      token,
      secretKey: process.env.JWT_SECRET_KEY,
    });
  } catch (e) {
    throw new Error("AuthenticationError");
  }
};

module.exports = resolveUser;
