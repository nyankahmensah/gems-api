function USSDSessionService({ ORM, utils }) {
  const getSessions = async filter => {
    return ORM.USSDSession.find(filter);
  };

  return {
    getSessions
  };
}

module.exports = USSDSessionService;
