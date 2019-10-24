const jwt = require("jsonwebtoken");

module.exports = function({_id, email, contacts}) {
  return new Promise((resolve,reject)=>{
      resolve(jwt.sign({user: {_id, email, contacts}}, process.env.SECRET));
  })
};