function USSDSessionService({ ORM, utils }) {
  const getSessions = async filter => {
    return ORM.USSDSession.find({
      createdAt: {
        $gte: new Date().setHours(0, 0, 0),
        $lt: new Date().setHours(23, 59, 59)
      }
    });
  };
  const getSessionNumber = async () => {
    return ORM.USSDSession.count({});
  };

  return {
    getSessions,
    getSessionNumber
  };
}

module.exports = USSDSessionService;
