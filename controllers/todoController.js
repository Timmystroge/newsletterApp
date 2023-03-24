const data = [
  { item: "get milk" },
  { item: "walk dog" },
  { item: "kick some coding ass!" },
];
const fire_controller = function (app) {
  app.get("/", function (req, res) {
    let html = `<h3 style='text-align: center;'>Todo Application With Node JS, Express, MongoDB!</h3>`;
    res.send(html);
  });

  app.get("/todo", function (req, res) {
    /* get data */
    res.render("todo", {todos: data});
  });

  app.post("/todo", function (req, res) {
    /* Post data */
  });

  app.delete("/todo/:item", function (req, res) {
    /* Delete data */
  });
};

module.exports = fire_controller;
