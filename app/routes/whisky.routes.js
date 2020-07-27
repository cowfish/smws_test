module.exports = app => {
  const whiskies = require("../controllers/whisky.controller.js");

  var router = require("express").Router();

  router.get("/", whiskies.findAll);
  router.get("/:id", whiskies.findOne);

  app.use('/api/whiskies', router);
};
