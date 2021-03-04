const { gql } = require("apollo-server");
const types = gql`
   type Person {
      id: ID!
      name: String
      lastname: String
      address: Address
      telephone: String
      email: String
   }
   type Address {
      street: String
      city: String
      state: String
   }
`;
module.exports = types;