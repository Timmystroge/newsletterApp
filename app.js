const express = require("express");
const bodyParser = require("body-parser");

// set app
const app = express();

// fire bodyParser
const urlencodedparser = bodyParser.urlencoded({ extended: false });
// set express statice route
app.use(express.static("public"));

// set up index page
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

// handle post request
app.post("/", urlencodedparser, function (req, res) {
  console.log(req.body);
  res.sendFile(`${__dirname}/success.html`);
});

//listen to server
app.listen(3000, function () {
  console.log("Server is running on port 3000!");
});

