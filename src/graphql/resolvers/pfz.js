module.exports = {
    Mutation: {
        pfz: async (_, args, { broker }) =>
            broker.PFZService.getPFZ({ effectiveDate: args.effectiveDate }),
    },

    Query: {

    }
};
