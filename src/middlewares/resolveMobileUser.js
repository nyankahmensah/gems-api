const MobileToken = require("../broker/db/models/MobileToken");

// Resolves user with auth token
const resolveMobileUser = async ({ mobileToken }) => {
  try {
    const storedMobileToken = await MobileToken.findOne({
      mobileToken,
    });
    return storedMobileToken.member;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = resolveMobileUser;
