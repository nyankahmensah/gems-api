module.exports = {
    Mutation: {

    },

    Query: {
        pfz: async (_, args, { broker }) =>
            broker.PFZService.getPFZ({ effectiveDate: args.effectiveDate }),
    }
};
