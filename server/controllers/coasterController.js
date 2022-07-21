const { Coaster } = require('../models');

const getCoasters = async (req, res) => {
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

module.exports = {
	getCoasters,
};
