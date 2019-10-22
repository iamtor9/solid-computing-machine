const bcrypt = require("bcrypt");

module.exports = {
  hashPass: function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  },
  isValid: function(password, hashedPass) {
    return bcrypt.compareSync(password, hashedPass);
  }
};
