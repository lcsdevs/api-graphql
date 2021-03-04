require("dotenv").config();

const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs")
const resolvers = require("./resolvers")

const db = {
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   pass: process.env.DB_PASS,
   name: process.env.DB_NAME,
};

const dbUri = 'mongodb://127.0.0.1:27017/person';
const dbOptions = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
};

mongoose
   .connect(dbUri, dbOptions)
   .then(() => console.log("Database connected"))
   .catch((error) => console.log("Databased failed: ", error));

   const server = new ApolloServer({ typeDefs, resolvers });

server
   .listen()
   .then(({ url }) => console.log(`Server ready at ${url}`))
   .catch((error) => console.log("Server failed: ", error));