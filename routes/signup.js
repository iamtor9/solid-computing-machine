const express = require("express");
const db = require("../models");
const {
  ensureToken,
  addContacts,
  createToken,
  deleteContacts,
  passHash
} = require("./routeFunctions");
const router = express.Router();
require("dotenv").config();

//signup / create user account route
router.post("/api/signup", function(req, res) {
  //create user
  if (!req.body.password || req.body.password.length < 8)
    return res.status(400).json({
      message: "Users validation failed: password: Password should be longer."
    });
  db.Users.create({
    email: req.body.email,
    password: passHash.hashPass(req.body.password),
    pin: req.body.pin,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    contacts: []
  })
    .then(user => {
      //create the contacts and add them to the user Doc
      addContacts(req.body.contacts)
        .then(newContactArr => {
          db.Users.findOneAndUpdate(
            { _id: user._id },
            { contacts: newContactArr }
          )
            .then(newUser => db.Users.findOne({ _id: newUser._id }))
            .then(async newUser => {
              //create and sign a token for the user
              const token = await createToken(newUser);
              res.status(200).json({ token });
            })
            .catch(err => {
              res.status(400).json(err.message);
            });
        })
        .catch(err => {
          res.status(400).json(err.message);
        });
    })
    .catch(err => {
      res.status(400).json(err.message);
    });
});

module.exports = router;