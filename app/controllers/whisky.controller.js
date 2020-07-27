const db = require("../models");
const Whisky = db.whiskies;

exports.findAll = (req, res) => {
    const number = req.query.number;
    var condition = number ? { number: { $regex: new RegExp("^"+number+"$"), $options: "i" } } : {};

    console.log(number);
    
    Whisky.find(condition)
	.then(data => {
	    res.send(data);
	})
	.catch(err => {
	    res.status(500).send({
		message:
		err.message || "Some error occurred while retrieving whiskies."
	    });
	});
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    
    Whisky.findById(id)
	.then(data => {
	    if (!data)
		res.status(404).send({ message: "Not found Whisky with id " + id });
	    else res.send(data);
	})
	.catch(err => {
	    res
		.status(500)
		.send({ message: "Error retrieving Whisky with id=" + id });
	});
};
