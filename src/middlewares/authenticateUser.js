const authenticateUser = (fn) => (root, args, context, info) => {
  if (!context.currentUser) {
    throw new Error("AuthenticationFailure");
  }

  return fn(root, args, context, info);
};

module.exports = authenticateUser;
