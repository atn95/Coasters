const { Coaster } = require('../models');

const getAllCoasters = async (req, res) => {
	try {
		const coasters = await Coaster.find({});
		if (coasters.length > 0) {
			res.json(coasters);
		}
		res.send('no coasters found');
	} catch (error) {
		console.log(error);
	}
};

const getCoasterByID = async (req, res) => {
	let { id } = req;
	try {
		let park = await CoasterPlant.findById(id);
		if (park) {
			res.json(park[0]);
		} else {
			res.send('invalid coaster');
		}
	} catch (error) {}
};

module.exports = {
	getAllCoasters,
	getCoasterByID,
};
