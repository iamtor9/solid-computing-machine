const db = require("../../models");

module.exports = function(contactArr){
    return new Promise((resolve, reject) => {
        let newContactArr = [];
        contactArr.forEach(contact => {
          db.Contacts.create({
            phoneNumber: contact.phoneNumber,
            lastName: contact.lastName,
            firstName: contact.firstName
          })
            .then(contactDoc => {
              newContactArr.push(contactDoc._id);
              if (contactArr.length === newContactArr.length) {
                resolve(newContactArr);
              }
            })
            .catch(err => {
              reject(err);
            });
        });
      });
}