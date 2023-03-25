const express = require("express");

var todoController = require("./controllers/todoController");

// init express
const app = express();

// set view engine
app.set("view engine", "ejs");

/* static files MIDDLE-WARE*/
app.use(express.static("./public"));

//? CODE MORE

// fire controller
todoController(app);

/* start and listen to server */
app.listen(3000, function () {
  console.log("Todo-node Server started on Port 3000!");
});
