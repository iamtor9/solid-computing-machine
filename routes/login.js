
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

router.post("/api/login", function(req, res) {
  db.Users.findOne({
    email: req.body.email
  })
    .then(async user => {
      if (passHash.isValid(req.body.password, user.password)) {
        //create and sign a token for the user
        const token = await createToken(user);
        res.status(200).json({ token });
      } else {
        res.status(401).json({
          err: "unauthorized",
          message: "invalid email or password provided"
        });
      }
    })
    .catch(err => {
      res.status(401).json({
        err: "unauthorized",
        message: "invalid email or password provided"
      });
    });
});

module.exports = router;