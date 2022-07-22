const { Coaster, Park } = require('../models');

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
	console.log('getCoasterByID');
	console.log(id);
	try {
		let park = await Coaster.findById(id);
		if (park) {
			res.json(park);
		} else {
			res.send('invalid coaster');
		}
	} catch (error) {
		console.log(error);
	}
};

const getCoasterByParkId = async (req, res) => {
	let { id } = req.params;
	try {
		let park = await Park.findById(id);
		if (park != null) {
			let coasters = await Coaster.find({ park_id: id });
			res.json(coasters);
		}

		console.log(park);

		// let coasters = await Coaster.find()
	} catch (error) {
		res.send('invalid ID');
	}
};

module.exports = {
	getAllCoasters,
	getCoasterByID,
	getCoasterByParkId,
};
