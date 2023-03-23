var express = require("express"); /* Require express */
var bodyParser = require("body-parser");
var app = express(); /* Fire express function */

// making use of url encoded
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// setting ejs as our view engine
app.set("view engine", "ejs");

// using middle ware to handle styles
// serving up static files using middleware
app.use("/assets", express.static("assets"));

// ! render a page using ejs
/* GET */
app.get("/", function (req, res) {
  res.send("Welcome to home page , dont be scared!");
  /* Sending an html page */
  res.sendFile(__dirname + "/index.html");
});

/* GET */
app.get("/about", function (req, res) {
  res.send("Welcome to about page , Tell us about you LOl!");
});

/* GET */
app.get("/profile", function (req, res) {
  res.send("welcome to profile page, please be nice");
});

/* GETTING QUERY STRINGS */
app.get("/contact", function (req, res) {
  res.render("contact", { qs: req.query });
});

/* POST - HANDLING A POST REQUEST */
app.post("/contact", urlencodedParser, function (req, res) {
  console.log(req.body);
  res.render("contact-success", { data: req.body });
});

/* GET */
app.get("/profile/:unique", function (req, res) {
  let hobbies = ["fighting", "dancing", "driving", "coding"];
  let profile = {
    age: 19,
    job: "ninja",
    stack: "QA Tester",
    yearsOfExp: "2 years",
    dreamCountry: "canada",
    resume: {
      year1: "FrontEnd Develper",
      year2: "Backend Develper",
      year3: "Fullstack Develper",
    },
  };

  /* Render */
  res.render("profile", {
    user_id: req.params.unique,
    profile: profile,
    hobby: hobbies,
  });
});

/* Route Parameter */
// app.get("/profile/:id", function (req, res) {
//   res.send(`Your request Id Parameter is ${req.params.id}`);
// });

app.listen(4000);
console.log("server started on Port 4000");
