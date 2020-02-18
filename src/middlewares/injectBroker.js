// injectBroker takes the broker (Business logic) and applies it to every request object
module.exports = ({ broker }) => {
  return function injectBrokerMiddleware(req, res, next) {
    req.broker = broker;
    next();
  };
};
