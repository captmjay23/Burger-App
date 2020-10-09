const express = require("express");
const router = express.Router();

router.get("/index", (req, res) => {
  res.render("index");
});

router.get("/login", (req, res) => {
  const { name, gender, age } = req.query;
  res.render("login", {
    data: [name, gender, age],
  });
});

router.get("/register", (req, res) => {
  res.render("register");
});
/* Need lagi mag module.export() */
module.exports = router;
