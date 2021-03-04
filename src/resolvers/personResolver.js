const Person = require("../models/Person")

const personResolver = {
  Query: {
    persons() {
      return Person.find()
    },
    person(_, { id }) {
      return Person.findById(id)
    },
  },
  Mutation: {
    createPerson(_, { person }) {
      const newPerson = new Person(person)
      return newPerson.save()
    },
  },
}

module.exports = personResolver