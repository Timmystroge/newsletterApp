const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// set app
const app = express();

//connect to database
mongoose
  .connect("mongodb://127.0.0.1:27017/newsletterDB")
  .then(function () {
    console.log("connection Secured!");
  })
  .catch(function () {
    console.log("Failed to connect");
  });

//create database schema
const newsletterSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
});

//create database model
const Newsletter = mongoose.model("Newsletter", newsletterSchema);

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
  const { firstname, lastname, email } = req.body;

  //create insertion js object
  const newNewsletter = new Newsletter({
    firstname: firstname,
    lastname: lastname,
    email: email,
  });

  newNewsletter
    .save()
    .then(function () {
      res.render("success");
    })
    .catch(function () {
      res.render("failure", { data: "Failed to join newsletter" });
    });
});

app.get("/*", (req, res) => {
  res.render("failure", { data: "Whoops! Something went wrong" });
});

//listen to server
app.listen(3000, function () {
  console.log("Server is running on port 3000!");
});
