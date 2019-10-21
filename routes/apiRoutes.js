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
  if (req.body.password.length < 8) {
    res.status(400).json({message: "Users validation failed: password: Password should be longer."})
  } else {
    db.Users.create({
      email: req.body.email,
      password: passHash.hashPass(req.body.password),
      pin: passHash.hashPass(req.body.pin),
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
                res.status(400).json(err.message);
              });
          })
          .catch(err => {
            db.Users.delete({ _id: user._id });
            res.status(400).json(err.message);
          });
      })
      .catch(err => {
        res.status(400).json(err.message);
      });
  }
});

router.post("/api/login", function(req, res){
  db.Users.findOne({
    email: req.body.email
  }).then(async user =>{
    if(passHash.isValid(req.body.password, user.password)){
      //create and sign a token for the user
      const token = await createToken(user);
      res.status(200).json({ token });
    } else {
      res.status(401).json({err: "unauthorized", message: "invalid email or password provided"})
    }
  }).catch(err=>{
    res.status(401).json({err: "unauthorized", message: "invalid email or password provided"})})
})

//this is a test to prove my point that the token validation works
router.post("/api/contacts", ensureToken, function(req, res) {
  // res.status(200).json(req.tokenData);
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
});



module.exports = router;
