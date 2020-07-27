const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
//mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.distilleries = require("./distillery.model.js")(mongoose);
db.whiskies = require("./whisky.model.js")(mongoose);

module.exports = db;
