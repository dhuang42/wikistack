const express = require("express");
const app = express();

const { db, Page, User } = require("./models");

const morgan = require("morgan");

const layout = require("./views/layout");

const PORT = 3000;

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/users", require("./routes/users"));
app.use("/wiki", require("./routes/wiki"));

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

const init = async () => {
  await db.sync({ force: true });

  try {
    // console.log(Page);
    await Page.sync();
    await User.sync();
  } catch (error) {
    console.error(error);
  }

  // make sure that you have a PORT constant
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();

// app.listen(3000);
