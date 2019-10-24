const express = require("express");
const router = express.Router();

//this is a test to prove my point that the token validation works
router.post("*", function(req, res) {
  res.status(404).json({ message: "route not found" });
});

//this is a test to prove my point that the token validation works
router.get("*", function(req, res) {
  res.status(404).json({ message: "route not found" });
});

//this is a test to prove my point that the token validation works
router.delete("*", function(req, res) {
  res.status(404).json({ message: "route not found" });
});

module.exports = router;
