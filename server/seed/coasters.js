const db = require('../db');
const { Coaster, Park } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
	const sixFlagsGreatAdventure = await Park.find({
		name: 'Six Flags Great Adventure',
	});
	const coasters = [
		{
			name: 'Batman',
			description:
				'BATMAN The Ride will show you what it feels like to be BATMAN, on this deeply intense 50-mile-per-hour juggernaut that is definitely not for the timid. Show your strength and bravery as you take on GOTHAM’s criminal element.',
			height: '105 ft',
			top_speed: '50 mph',
			duration: '1 min 40 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfgadv_batmancoaster_1440x1533_2_2-282x300.jpg',
			park_id: sixFlagsGreatAdventure[0]._id,
		},
	];

	await Coaster.insertMany(coasters);
	console.log('Created coasters!');
};

const run = async () => {
	await main();
	db.close();
};

run();
