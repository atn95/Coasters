const db = require('../db');
const { Park } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
	const parks = await Park.insertMany([
		{
			park_name: 'Six Flags Great Adventure',
			city: 'Jackson',
			state: 'NJ',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/sfgad_motion.gif',
		},
		{
			park_name: 'The Great Escape',
			city: 'Lake George',
			state: 'NY',
			image:
				'https://upload.wikimedia.org/wikipedia/en/3/36/The_Great_Escape_Theme_Park_logo.png',
		},
		{
			park_name: 'Six Flags Darien Lake',
			city: 'Corfu',
			state: 'NY',
			image:
				'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Darien_Lake_Resort_logo.png/220px-Darien_Lake_Resort_logo.png',
		},
		{
			park_name: 'Six Flags New England',
			city: 'Agawam',
			state: 'MA ',
			image:
				'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/FNE_2019_CoasterLogo_Color_reduced_res.jpg/220px-FNE_2019_CoasterLogo_Color_reduced_res.jpg',
		},
		{
			park_name: 'Six Flags America',
			city: 'Bowie',
			state: 'MD',
			image:
				'https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Six_Flags_America_logo.jpg/220px-Six_Flags_America_logo.jpg',
		},
	]);

	console.log('Created parks!');
};
const run = async () => {
	await main();
	db.close();
};

run();
