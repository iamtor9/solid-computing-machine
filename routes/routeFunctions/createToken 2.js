const jwt = require("jsonwebtoken");

module.exports = function({_id, email, pin, contacts}) {
  return new Promise((resolve,reject)=>{
      resolve(jwt.sign({user: {_id, email, pin, contacts}}, process.env.SECRET));
  })
};