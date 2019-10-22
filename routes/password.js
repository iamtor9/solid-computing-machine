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
router.post("/api/password", ensureToken, function(req, res) {
  if (req.body.newPass !== req.body.confirmNewPass)
    return res.status(400).json({ message: "new passwords do not match" });
  db.Users.findOne({ _id: req.tokenData._id }).then(user => {
    if (!passHash.isValid(req.body.password, user.password))
      return res.status(400).json({ message: "incorrect password provided" });
    let newPassword = passHash.hashPass(req.body.newPass);
    db.Users.findOneAndUpdate(
      { _id: req.tokenData._id },
      { password: newPassword }
    )
      .then(() => {
        return db.Users.findOne({ _id: req.tokenData._id });
      })
      .then(async newUser => {
        //create and sign a token for the user
        const token = await createToken(newUser);
        res
          .status(200)
          .json({ token, newPAss: newUser.password, oldPAss: user.password });
      });
  });
});

module.exports = router;
