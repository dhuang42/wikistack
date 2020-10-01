const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const addPage = require("../views/addPage");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false,
});

//Routing to /wiki //

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});
router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = router;
