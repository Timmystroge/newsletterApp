const express = require("express");
const bodyParser = require("body-parser");

// set app
const app = express();

// set middle wares
app.set("view engine", "ejs");
// fire bodyParser
const urlencodedparser = bodyParser.urlencoded({ extended: false });
// set express statice route
app.use(express.static("public"));

// set up index page
app.get("/", function (req, res) {
  res.render("signup");
});

// handle post request
app.post("/", urlencodedparser, function (req, res) {
  console.log(req.body);
  res.sendFile(`${__dirname}/success.html`);
});

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/failure.html`);
});

//listen to server
app.listen(3000, function () {
  console.log("Server is running on port 3000!");
});
