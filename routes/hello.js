const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home Page");
});

router.get("/main", (req, res) => {
  res.send("Main Page");
});

module.exports = router;
