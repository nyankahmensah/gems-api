function USSDSessionService({ ORM, utils }) {
  const getSessions = async (filter, page) => {
    return ORM.USSDSession.paginate({
      createdAt: {
        $gte: new Date().setHours(0, 0, 0),
        $lt: new Date().setHours(23, 59, 59)
      }
    }, page);
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
