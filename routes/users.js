const router = require("express").Router();
const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false,
});

router.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
