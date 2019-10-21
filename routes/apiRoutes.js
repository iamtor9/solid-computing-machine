const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("../models");
const {
  ensureToken,
  addContacts,
  createToken,
  deleteContacts
} = require("./routeFunctions");
const router = express.Router();
require("dotenv").config();

//signup / create user account route
router.post("/api/signup", function(req, res) {
  //create user
  db.Users.create({
    email: req.body.email,
    password: req.body.password,
    pin: req.body.pin,
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
              db.Users.delete({ _id: user._id });
              res.status(400).json(err);
            });
        })
        .catch(err => {
          db.Users.delete({ _id: user._id });
          res.status(400).json(err);
        });
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//this is a test to prove my point that the token validation works
router.post("/api/contacts", ensureToken, function(req, res) {
  res.status(200).json(req.tokenData);
});

module.exports = router;
