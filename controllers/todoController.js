const bodyParser = require("body-parser");
// bodyParser
var urlencodedparser = bodyParser.urlencoded({ extended: false });

// create dummy data on server
var data = [
  { item: "get milk" },
  { item: "walk dog" },
  { item: "kick some coding ass!" },
];

// fire controller
const fire_controller = function (app) {
  app.get("/", function (req, res) {
    let html = `<h3 style='text-align: center;'>Todo Application With Node JS, Express, MongoDB!</h3>`;
    res.send(html);
  });

  app.get("/todo", function (req, res) {
    /* get data */
    res.render("todo", { todos: data });
  });

  app.post("/todo", urlencodedparser, function (req, res) {
    /* Post data */
    data.push(req.body);
    res.json(data);
  });

  app.delete("/todo/:item", function (req, res) {
    /* Delete data */
    // req.params.item

    data = data.filter(function (todo) {
      return todo.item.replace(/ /g, "-") !== req.params.item;
    });

    res.json(data);
  });
};

module.exports = fire_controller;
