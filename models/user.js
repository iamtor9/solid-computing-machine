let mongoose = require("mongoose");
let bcrypt = require("bcrypt");

// Save a reference to the Schema constructor
let Schema = mongoose.Schema;

let UsersScheme = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [
      function(email) {
        let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(email);
      },
      "Please fill a valid email address"
    ],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address"
    ]
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required"
  },
  contacts: [{
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Note model
    ref: "Contacts"
  }],
  firstName: {
    type: String,
    trim: true,
    required: "first name is Required"
  },
  lastName: {
    type: String,
    trim: true,
    required: "last name is Required"
  }
}, {timestamps: true} );


let Users = mongoose.model("Users", UsersScheme);

// Export the Users model
module.exports = Users;
