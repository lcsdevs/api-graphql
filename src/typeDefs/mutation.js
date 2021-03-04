const { gql } = require("apollo-server");

const mutation = gql`
   type Mutation {
      createPerson(person: PersonInput): Person
   }
   input PersonInput {
      name: String
      lastname: String
      address: AddressInput
      telephone: String
      email: String
   }
   input AddressInput {
      street: String
      city: String
      state:String
   }
`;
module.exports = mutation;