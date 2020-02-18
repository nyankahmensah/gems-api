module.exports = {
  Mutation: {
    requestApproval: async (_, args, { broker }) =>
      broker.ApprovalService.requestApproval(args.input)
  },

  Query: {
      approvals: async (_, args, { broker }) =>
          broker.ApprovalService.getApprovals(args.filter)
  }
};
