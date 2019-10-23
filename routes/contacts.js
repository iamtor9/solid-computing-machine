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

//this is a test to prove my point that the token validation works
router.post("/api/contacts", ensureToken, function(req, res) {
  // res.status(200).json(req.tokenData);
  console.log(req.body);
  if (req.body.contacts.length === 0) {
    res.status(400).json({ message: "no contacts given" });
  } else {
    addContacts(req.body.contacts).then(newContactArr => {
      db.Users.findOneAndUpdate(
        { _id: req.tokenData._id },
        { $push: { contacts: { $each: newContactArr } } },
        { upsert: true }
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
    });
  }
});

//this is a test to prove my point that the token validation works
router.delete("/api/contacts", ensureToken, function(req, res) {
  // res.status(200).json(req.tokenData);
  if (req.body.contacts.length === 0) {
    res.status(400).json({ message: "no contacts given" });
  } else {
    deleteContacts(req.body.contacts, req.tokenData._id).then(async newUser => {
      //create and sign a token for the user
      const token = await createToken(newUser);
      res.status(200).json({ token });
    });
  }
});

//this is a test to prove my point that the token validation works
router.get("/api/contacts", ensureToken, function(req, res) {
  // res.status(200).json(req.tokenData);
  res.status(200).json(req.UserData.contacts);
});

module.exports = router;
