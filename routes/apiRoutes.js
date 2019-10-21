let express = require("express");
let router = express.Router();
let db = require("../models");

router.post("/api/signup", function(req, res){
    db.Contacts.create({
        phoneNumber: req.body.contacts[0].phoneNumber,
        lastName: req.body.contacts[0].lastName,
        firstName:  req.body.contacts[0].firstName
    }).then(contact=> {
        db.Users.create({
            email: req.body.email,
            password: req.body.password,
            pin: req.body.pin,
            contacts: [contact._id]
        }).then(user=>{
            res.json(user)
        }).catch(err=>{
            res.json(err);
        })
    }).catch(err=>{
        res.json(err);
    })
})

module.exports = router;