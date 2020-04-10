module.exports = {
  Mutation: {
    createMessage: async (_, args, { broker }) =>
      broker.MessageService.createMessage(args),
  },

  Query: {
    messages: async (_, args, { broker }) =>
      broker.MessageService.getMessage(args.filter),
  },
};
