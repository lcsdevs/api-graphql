const mongoose = require("mongoose");

const PersonSchema = mongoose.Schema({
   name: String,
   lastname: String,  
   address: {
      street: String,
      city: String,
      state: String,
   },
   telephone: String,
   email: String,
});

module.exports = mongoose.model("Person", PersonSchema);