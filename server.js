const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:8081" } ));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
    .connect(db.url, {
	useNewUrlParser: true,
	useUnifiedTopology: true
    })
    .then(() => {
	console.log("Connected to the database!");
    })
    .catch(err => {
	console.log("Cannot connect to the database!", err);
	process.exit();
    });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "SMWS Distilleries" });
});

require("./app/routes/distillery.routes")(app);
require("./app/routes/whisky.routes")(app);

// set port, listen for requests
const port=8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
