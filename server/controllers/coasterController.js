const { Coaster } = require('../models');

const getAllCoasters = async (req, res) => {
	try {
		const coasters = await Coaster.find({});
		if (coasters.length > 0) {
			res.json(coasters);
		} else {
			res.send('no coasters found');
		}
	} catch (error) {
		console.log(error);
	}
};

const getCoasterByID = async (req, res) => {
	let { id } = req.params;
	try {
		let park = await Coaster.findById(id);
		console.log(park);
		if (park) {
			res.json(park[0]);
		} else {
			res.send('invalid coaster');
		}
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getAllCoasters,
	getCoasterByID,
};
