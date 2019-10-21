let mongoose = require("mongoose");

// Save a reference to the Schema constructor
let Schema = mongoose.Schema;

let ContactScheme = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "first name is Required"
  },
  lastName: {
    type: String,
    trim: true,
    required: "last name is Required"
  },
  phoneNumber: {
    type: String,
    trim: true,
    required: "phone number is Required",
    validate: [
      function(input) {
        return input.length >= 11;
      },
      "phone number should be longer."
    ]
  }
});

let Contacts = mongoose.model("Contacts", ContactScheme);

// Export the Contacts model
module.exports = Contacts;
