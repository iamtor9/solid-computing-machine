const jwt = require("jsonwebtoken");
const db = require("../../models");

//verify the token
module.exports = function(req, res, next) {
  //check if we were given a token or not
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader !== undefined) {
    req.token = bearerHeader.split(" ")[1];
    //verify the token to make sure it is valid
    jwt.verify(req.token, process.env.SECRET, function(err, data) {
      if (err) {
        //send err 403 if not valid
        res.sendStatus(403);
      } else {
        //compare the token data to what we have for the user in the database to make sure it is valid and not old
        let userData = data.user;
        db.Users.findOne({ _id: data.user._id }).then(user => {
          if (
            userData.email === user.email &&
            JSON.stringify(userData.contacts) === JSON.stringify(user.contacts)
          ) {
            //if completely valid token then sent to the route
            req.tokenData = data.user;
            db.Users.findOne({ _id: data.user._id })
              .populate("contacts")
              .then(user => {
                req.UserData = user;
                next();
              });
          } else {
            res.sendStatus(403);
          }
        });
      }
    });
  } else {
    res.sendStatus(403);
  }
};
