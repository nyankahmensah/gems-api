module.exports = {
  Mutation: {},

  Query: {
    USSDSessions: async (_, args, { broker }) =>
      broker.USSDSessionService.getSessions(args.filter, args.page),

    USSDSessionsNumber: async (_, args, { broker }) =>
        broker.USSDSessionService.getSessionNumber(),
  }
};
