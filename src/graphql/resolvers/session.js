module.exports = {
  Mutation: {},

  Query: {
    USSDSessions: async (_, args, { broker }) =>
      broker.USSDSessionService.getSessions(args.filter),

    USSDSessionsNumber: async (_, args, { broker }) =>
        broker.USSDSessionService.getSessionNumber(),
  }
};
