const db = require("../../models");

module.exports = function(contactArr, userID) {
  return new Promise((resolve, reject) => {
    let newContactArr = [];
    contactArr.forEach(contactID => {
      db.Contacts.delete({
        _id: contactID
      })
        .then(() =>
          db.Users.findByIdAndUpdate(
            { _id: userID },
            { $pull: { contacts: contactID } },
            { multi: true }
          )
        )
        .then(newUser => {
          newContactArr.push("florp");
          if (contactArr.length === newContactArr.length) {
            resolve(newUser);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  });
};
