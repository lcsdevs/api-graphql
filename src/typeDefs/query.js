const { gql } = require("apollo-server");

const query = gql`
   type Query {
      persons: [Person]
      person(id: ID!): Person
   }
`;
module.exports = query