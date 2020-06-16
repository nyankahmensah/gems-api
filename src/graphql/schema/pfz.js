const { gql } = require("apollo-server-express");

const typeDefs = gql`    
    type PFZ {
        effectiveDate: Date
        pfzImage: String
    }

    extend type Query {
        pfz(effectiveDate: Date): PFZ
    }
`;

module.exports = typeDefs;
