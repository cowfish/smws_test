module.exports = app => {
  const distilleries = require("../controllers/distillery.controller.js");

  var router = require("express").Router();

  router.get("/", distilleries.findAll);
  router.get("/:id", distilleries.findOne);

  app.use('/api/distilleries', router);
};
