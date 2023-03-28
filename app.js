const express = require("express");
const appController = require("./controller/appController");

// set app
const app = express();

// set express statice route
app.use(express.static("public"));

// fire App controller
appController(app);

//listen to server
app.listen(3000, function () {
  console.log("Server is running on port 3000!");
});
