const express = require("express");
const { ensureToken } = require("./routeFunctions");
const router = express.Router();
const Nexmo = require("nexmo");
require("dotenv").config();

const nexmo = new Nexmo({
  apiKey: process.env.NEXMO_KEY,
  apiSecret: process.env.NEXMO_SECRET
});

//this is a test to prove my point that the token validation works
router.post("/api/alert", ensureToken, async function(req, res) {
  let {LAT, LON} = req.body
  let contacts = req.UserData.contacts;
  await contacts.forEach((contact, i) => {
    nexmo.message.sendSms(
      process.env.VIRTUAL_PHONE,
      parseInt(contact.phoneNumber),
      `SAFE STATE ALERT!: ${req.UserData.firstName} ${req.UserData.lastName}: has had an emergency at https://www.google.com/maps/place/${LAT},${LON}`,
      function(result, err) {
        if (i === contacts.length - 1) {
          res.status(200).json({token: req.token});
        }
      }
    );
  });
});

module.exports = router;
