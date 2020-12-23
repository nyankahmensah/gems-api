module.exports = {
  Mutation: {
    requestApproval: async (_, args, { broker }) =>
      broker.ApprovalService.requestApproval(args.input),

    acceptApproval: async (_, args, { broker }) =>
      broker.ApprovalService.approve({
        approval: args.approvalID,
      }),

    rejectApproval: async (_, args, { broker }) =>
      broker.ApprovalService.reject({
        approval: args.input.approvalID,
        denialReason: args.input.reason,
      }),
  },

  Query: {
    approvals: async (_, args, { broker }) =>
      broker.ApprovalService.getApprovals(args.filter, args.page),
  },
};
