const db = require("../models");
const Distillery = db.distilleries;

exports.findAll = (req, res) => {
    const number = req.query.number;
    var condition = number ? { number: { $regex: new RegExp("^"+number+"$"), $options: "i" } } : {};
    
    Distillery.find(condition)
	.then(data => {
	    res.send(data);
	})
	.catch(err => {
	    res.status(500).send({
		message:
		err.message || "Some error occurred while retrieving distilleries."
	    });
	});
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    
    Distillery.findById(id)
	.then(data => {
	    if (!data)
		res.status(404).send({ message: "Not found Distillery with id " + id });
	    else res.send(data);
	})
	.catch(err => {
	    res
		.status(500)
		.send({ message: "Error retrieving Distillery with id=" + id });
	});
};
