const fireAppController = function (app) {
  // set up index page
  app.get("/", function (req, res) {
    res.send("hello welcome to newsletter index page!");
  });
};

module.exports = fireAppController;
