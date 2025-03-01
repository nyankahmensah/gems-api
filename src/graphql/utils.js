const { MobileUserModel } = require("../broker/db/models/MobileUser");
const utils = require("../broker/utils");

// Resolves mobile user with auth token
const resolveMobileUser = async ({ mobileToken }) => {
  try {
    return await MobileUserModel.findOne({
      mobileToken
    });
  } catch (e) {
    throw new Error("AuthenticationError");
  }
};

// Resolves user with auth token
const resolveUser = async ({ token }) => {
  try {
    return await utils.validateToken({
      token,
      secretKey: process.env.JWT_SECRET_KEY
    });
  } catch (e) {
    throw new Error("AuthenticationError");
  }
};

const authenticateUser = fn => (root, args, context, info) => {
  if (!context.currentUser) {
    throw new Error("AuthenticationFailure");
  }

  return fn(root, args, context, info);
};

exports.resolveMobileUser = resolveMobileUser;
exports.resolveUser = resolveUser;
exports.authenticateUser = authenticateUser;
