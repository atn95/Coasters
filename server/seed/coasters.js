const db = require('../db');
const { Coaster, Park } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
	const sixFlagsGreatAdventure = await Park.find({
		name: 'Six Flags Great Adventure',
	});
	const theGreatEscape = await Park.find({
		name: 'The Great Escape',
	});
	const sixFlagsDarienLake = await Park.find({
		name: 'Six Flags Darien Lake',
	});
	const sixFlagsNewEngland = await Park.find({
		name: 'Six Flags New England',
	});

	const sixFlagsAmerica = await Park.find({
		name: 'Six Flags America',
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
		{
			name: 'El Toro',
			desccription:
				'Ride him up nearly 19 stories to face the first terrifying drop of 176 feet. At a 76 degree angle, that would be the steepest drop of any wooden-style roller coaster in the country. ',
			height: '176 ft',
			top_speed: '70 mph',
			duration: '2 min 5 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/El-Toro-USA-10Best-Web-Thumbnail.jpg',
			park_id: 'sixFlagsGreatAdventure[0]._id',
		},
		{
			name: 'Green Lantern',
			desccription:
				'It all starts with a 155 foot hill. Now that you’re committed, how about a bravery-crunching 144-foot drop followed immediately by a 121-foot loop? Now you’re starting to feel super! On the blisteringly fast 100 foot diving loop, wave high to SUPERMAN Ultimate Flight next door, but don’t get too friendly because immediately you’ll soon be zooming into an ultra-unique 72-foot inclined loop. The entire vertical loop is tilted at an angle, and you enter it sideways, because super heroes don’t need to fly in straight lines.',
			height: '154 ft',
			top_speed: '64 mph',
			duration: '2 min 30 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/Green-Lantern-1440x1533-1-962x1024.jpg',
			park_id: 'sixFlagsGreatAdventure[0]._id',
		},
		{
			name: 'Jersey Devil Coaster',
			desccription:
				'The world’s tallest, fastest, and longest single rail coaster, Jersey Devil Coaster, opened on June 13, 2021. Make your way to the park and great ready for maximum speed, twists and turns. The coaster hits 58 miles an hour with a 130-foot drop. Towering 13 stories high, the coaster takes riders over 3,000 feet of track. ',
			height: '130 ft',
			top_speed: '58 mph',
			duration: '2 min 5 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/Jersey-Devil-Coaster-1440x1533-1-962x1024.jpg',
			park_id: 'sixFlagsGreatAdventure[0]._id',
		},
		{
			name: 'Kingda Ka',
			desccription:
				'You’ll leave the station going from 0 to 128 miles per hour in a jaw-dropping 3.5 seconds. Actually, there won’t even be time for your jaw to drop. You’ll be shooting up that impossible height so fast, you won’t even have time to think, so just hang on. It’s 90° straight up. And once you get to the top you’ll be plummeting right back down in a 270-degree spiral that is not recommended for wimps. There is very little that can prepare you for a drop of this intensity. You’ll top it off with a 129-foot camel hump. Well, how else did you think the King got around?',
			height: '456 ft',
			top_speed: '128 mph',
			duration: '50 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfga-knigdaka_1440x1533-962x1024.jpg',
			park_id: 'sixFlagsGreatAdventure[0]._id',
		},
		{
			name: 'Medusa',
			desccription:
				'Journey back in time to the Great Frontier and experience the rise and fall of Exile Canyon. Life in this unforgiving, Gold Rush-era outpost was so grueling, and the conditions so insurmountable, it earned the nickname “Medusa.” Flipping you seven times across 3,985 feet of track, you’ll brave scorching fire, chilling mist and speeds of approximately 60 miles per hour as you attempt to escape the wrath of the mythical Gorgon, Medusa!',
			height: '142 ft',
			top_speed: '60 mph',
			duration: '4 min 55 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/Medusa-Entering-Corkscrew-480x270.jpg',
			park_id: 'sixFlagsGreatAdventure[0]._id',
		},
		{
			name: 'Nitro',
			desccription:
				'Nitro is a new breed of thrill ride they call a Hypercoaster, which translates into utterly over the top, speed, height, and airtime. Can you feel the hype? The seating situation is minimal—no shoulder restraints, no sides on the cars – you’ll really feel like you’re just flying through space at insane speeds.',
			height: '230 ft',
			top_speed: '80 mph',
			duration: '3 min',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/Nitro-Bunny-Hilll-220x220-1.png',
			park_id: 'sixFlagsGreatAdventure[0]._id',
		},
		{
			name: 'Superman: Ultimate Flight',
			desccription:
				'You’ll ride the way Superman flies—face down and head first. This is the ultimate way to experience the challenge of the mind-ripping new legend, the pretzel loop! Once you clear the first ten story drop, you’ll fly into this totally innovative loop design, which is really two inversions in one. You can tell from the name of the pretzel loop that you’ll be more than slightly twisted by this warped track!',
			height: '106 ft',
			top_speed: '60 mph',
			duration: '2 min 25 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/Superman-1440x1533-1-962x1024.jpg',
			park_id: 'sixFlagsGreatAdventure[0]._id',
		},
		{
			name: 'The Joker',
			desccription:
				'After heading straight up a 12-story, 90-degree hill, this 4-D, free-fly coaster wreaks havoc as you flip head-over-heels along the weightless journey. You will experience exhilarating leaps and dives along a horizontal plane, along with unexpected drops as you tumble from one level to the next. The wing seats amp up the pandemonium since you will experience all of this chaos with no track above or below – just the sky, ground and adjacent Great Lake churning around you!\n',
			height: '120 ft',
			top_speed: '50 mph',
			duration: '1 min 35 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfgadv_jokerreal_1440x1533_0-1428x1536.jpg',
			park_id: 'sixFlagsGreatAdventure[0]._id',
		},
		{
			name: 'Harley Quinn Crazy Train',
			desccription:
				'Take your seat on the train as it cranks up to 26 feet high. Then you’re off, on a very curvy, winding series of small hills and twists that double-back on one another as you swerve around the course at 22 miles per hour. As the extra-long train swishes wildly through the trees, the trail itself is in a figure-eight with wild curves and crazy turns.',
			height: '26 ft',
			top_speed: '22 mph',
			duration: '1 min 45 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/Harley-Quinn-Crazy-Train-220X220.jpg',
			park_id: 'sixFlagsGreatAdventure[0]._id',
		},
		{
			name: 'The Dark Knight ',
			desccription:
				'You will face six complete 180 degree turns, and a series of hair-raising ups and down from a height of 45 feet. Ever try that kind of thing in a dark, enclosed space at 30 miles per hour? Now you know why it isn’t easy fighting crime in town like this!',
			height: '45 ft',
			top_speed: '30 mph',
			duration: '1 min 50 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfgadv_darkknightcoaster_1440x1533_0-962x1024.jpg',
			park_id: 'sixFlagsGreatAdventure[0]._id',
		},
		{
			name: 'Alpine Bobsled',
			desccription:
				'There is no greater honor for an athlete than participating in the Olympic Games. For the last century, bobsled racing has been one of the most popular and thrilling winter sports. Now, looking up at the 1,490-foot long mountain bobsled trail winding through the sky, you’ll feel more respect than ever for the awesome achievement of Olympic athletes.',
			height: '64 ft',
			top_speed: '35 mph',
			duration: '2 min 20 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfge_alpine_bobsled_1440x1533-768x818.jpg',
			park_id: 'theGreatEscape[0]._id',
		},
		{
			name: 'Comet',
			desccription:
				'The massive 4,200-foot wooden coaster that forms an immense back wall of the park has an unbelievable history. Part of it was first built in 1927. It was known as Cyclone way back then, and it was famous in its day for being one of the most thrilling rides on earth. It was rebuilt in 1947 and redesigned into a space shooter when it was renamed The Comet. It then delivered another 40+ years of nonstop coaster bliss to generations of riders. The Comet later arrived at The Great Escape to begin the modern phase of its life.',
			height: '55 mph',
			top_speed: '2 min 15 sec',
			duration: '2 min 15 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfge_comet_1440x1533_0-768x818.jpg',
			park_id: 'theGreatEscape[0]._id',
		},
		{
			name: 'Flashback',
			desccription:
				'You can’t miss Flashback, the pride and joy of Hot Rod USA. Climb on board and you’ll be pulled 120-feet in the air. Once you get to the top, you can relax for a few seconds, then you’ll be released to tackle Flashback’s ridiculous strip of runway at top speeds. Brace yourself for what comes next: a courage-zapping, double inversion, cobra roll. This loop design will leave your hair standing on end, as it flips you upside down over and over again. Now that you’re warmed up, how does the number 5.2 sound? Because that’s the number of G-forces you’ll experience as you conquer this massive vertical loop.',
			height: '125 ft',
			top_speed: '45 mph',
			duration: '2 min 25 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfge_boomerang_1440x1533_3-768x818.jpg',
			park_id: 'theGreatEscape[0]._id',
		},
		{
			name: 'Steamin’ Demon',
			desccription:
				'You will blast through the 1,565 feet of fire orange track so fast you won’t know what hit you. The layout is compact perfection — everything is right where you need it, right when you need it. The insane journey begins on an 85-foot haul up to the top of the first lift hill. Put whatever you may have been thinking about on hold for the next minute or so, because you’re only going to have the time to hold on as you dart ferociously into this swooping high-speed joyride.',
			height: '95 ft',
			top_speed: '40 mph',
			duration: '1 min 30 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/8.26-1124x720.jpg',
			park_id: 'theGreatEscape[0]._id',
		},
		{
			name: 'Boomerang',
			desccription:
				'Hop on and buckle up! After plunging down a drop of nearly 125 feet and circling three loops, you get to do the entire thing over again… but backwards. Staying true to its name, you get thrown around once and then Boomerang right back. Our loops will have your hair standing up on the top of your head as the coaster flips you upside down again and again! The Boomerang comes equipped with 6 total inversions and two drops in a riveting 90 seconds that will have you bouncing back for more.\n\n',
			height: '117 ft',
			top_speed: '47 mph',
			duration: '1 min 48 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/thrill-boomerang02b-1.jpg',
			park_id: 'sixFlagsDarienLake[0]._id',
		},
		{
			name: 'Mind Eraser',
			desccription:
				'The Mind Eraser will test your courage and bravery while throwing you through loops and turns in this suspended coaster! Feet dangling and hair flying, this ride was built to test the toughest coaster riders while flipping them around. Make sure your shoes are tied nice and tight- or off all together, this ride will make you lose your flip flops! Shooting you up then down while twisting you all around, hold onto your hats folks- you will go upside down. Watch the ground below quickly turn to sky on the Mind Eraser!',
			height: '109 ft',
			top_speed: '50 mph',
			duration: '1 min 25 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/thrill-mind-eraser02b-1.jpg',
			park_id: 'sixFlagsDarienLake[0]._id',
		},
		{
			name: 'Motocoaster',
			desccription:
				'Motorcycles are for the tough and the brave so make sure you are ready to catch flight quick. You will wait at the start for the red light to turn green then BAM- you’re off and on your way. Feel the breeze through your hair as you zoom through the quickest ride in the park. Time flies by so fast when you’re speeding on Motocoaster that you’ll want to ride it again and again!',
			height: '44 ft',
			top_speed: '38 mph',
			duration: '2 min 23 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/thrill-motocoaster03b.jpg',
			park_id: 'sixFlagsDarienLake[0]._id',
		},
		{
			name: 'Predator',
			desccription:
				'The Predator will bump and shake you while taking you up and down on the track. At maximum speeds of 50 miles per hour and a top height of 95 feet, the Predator will put all thrill-seekers to the test. Located right next to Ride of Steel and the lake, enjoy the great breeze while riding the only wooden coaster in the park. Hang on tight, you’re in for a wild ride!',
			height: '95 ft',
			top_speed: '50 mph',
			duration: '1 min 50 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/thrill-predator02b.jpg',
			park_id: 'sixFlagsDarienLake[0]._id',
		},
		{
			name: 'Rolling Thunder',
			desccription:
				'Only the bravest can ride this thrilling 360-degree loop which will rock and roll you back and forth. Then, prepare to be suspended upside down at the top just long enough to catch your breath. Our uniquely designed trains will reverse you mid loop for an unexpected and thrill-packed ride! Rolling Thunder- it’s “one wild” looping thrill ride!',
			height: '96 ft',
			top_speed: '56 mph',
			duration: '2 min 10 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/thrill-rolling-thunder01b-1.jpg',
			park_id: 'sixFlagsDarienLake[0]._id',
		},
		{
			name: 'Ride of Steel',
			desccription:
				'Enjoy the heart-pounding thrill of our tallest drop in the park. You will plunge 205 feet on the first 70-degree drop, but it doesn’t end there. Be ready to tackle two more drops and zoom around quick turns. Hold on tight, at the end of the ride, you’ll hit fast paced mini hills that will make you feel like you’re jumping out of your seat! Challenge yourself to ride the Ride of Steel and see what it feels like to fly!',
			height: '208 ft',
			top_speed: '78 mph',
			duration: '2 min 2 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/thrill-ride-of-steel01b.jpg',
			park_id: 'sixFlagsDarienLake[0]._id',
		},
		{
			name: 'Tantrum',
			desccription:
				'Reaching speeds of 52 mph, the coaster snakes through the structure over a bunny hop, keeps riders wondering which way is up or down during an Immelman turn, and finishes with a tilted loop. You’ll be thrown through a Tantrum as you rip through the clouds on one of the parks newest rides. Hop on to our bright green coaster and soar through the sky. Hold on tight, this speedy coaster is a thrill seekers dream!',
			height: '98 ft',
			top_speed: '53 mph',
			duration: '1 min',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/screenshot_7-1.png',
			park_id: 'sixFlagsDarienLake[0]._id',
		},
		{
			name: 'Viper',
			desccription:
				'The Viper is the ultimate Darien Lake coaster. Featuring loops, flips, and stops, The Viper is a must-ride for all coaster lovers. Equipped with a total of 5 inversions, you will be flipped upside down and spun around while riding this classic Darien Lake coaster. The Viper also features a tunnel that will keep you on your toes and a 70-foot drop that will have thrill-seekers shouting and smiling big enough for a great souvenir picture at the end. Roller coaster enthusiasts can’t afford to miss Darien Lake’s signature coaster which has been the “first” coaster for millions of Darien Lake guests.\n\n',
			height: '121 ft',
			top_speed: '50 mph',
			duration: '2 min 4 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/thrill-viper01b-1.jpg',
			park_id: 'sixFlagsDarienLake[0]._id',
		},
		{
			name: 'Batman The Dark Knight',
			desccription:
				'Following an 11 story climb to the top of the lift, brace yourself for a full 360-degree loop right off the bat. You’re a global superhero, you don’t need to warm up. After escaping that obstacle, now there’s dive loop, then a zero-g roll waiting for you about ten seconds later! Next up you’ll be pounded by a set of interlocking corkscrews with enough G-force to make you scream in slow motion. How do a whopping 4 G’s sound? Because that’s what you’ll be taking right about now. All in all, you’ll face a mind-warping five inversions.',
			height: '118 ft',
			top_speed: '55 mph',
			duration: '2 min 20 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfne_batmanthedarkknight_1440x1533_0_1-1-768x818.jpg',
			park_id: 'sixFlagsNewEngland[0]._id',
		},
		{
			name: 'Flashback',
			desccription:
				'Pile into the sleek train and get ready to rock the 117-foot tall rails not once, but twice! To build up the velocity to make it through the course even a single time, you’ll need to haul backwards out of the launch tunnel up a steep hill, until you’re practically vertical. Then bam, you’re dropped down the track and go blasting back through the loading bay and straight into the action at 47 miles per hour.',
			height: '117 ft',
			top_speed: '47 mph',
			duration: '1 min 48 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/2017_sfne_flashback_3_1-1024x731.jpg',
			park_id: 'sixFlagsNewEngland[0]._id',
		},
		{
			name: 'Superman ',
			desccription:
				'Welcome to the world of the hypercoaster. This style of roller coaster is so intense they had to come up with a whole new category for it. Hypercoasters are the modern breed of oversized roller coaster that are pumped up to more than 200 feet tall. SUPERMAN The Ride easily clears that distinction, with a height of 208 feet and a mind-blowing 221 foot drop.',
			height: '208 ft',
			top_speed: '77 mph',
			duration: '1 min 30 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/2017_sfne_superman_detail_1440x1533-768x818.png',
			park_id: 'sixFlagsNewEngland[0]._id',
		},
		{
			name: 'The Joker : Free Fly Coaster',
			desccription:
				'For those brave enough to challenge THE JOKER, you will begin your journey by traveling straight up a 120-foot hill. Upon cresting the lift hill, you will get a brief opportunity to take in breathtaking views of the park, but you better look quick, because before you know it you’ll be flipping head-over-heels as you tumble towards the first of two beyond-vertical Raven Drops. You might flip once, twice, or eight times throughout your maniacal journey!',
			height: '120 ft',
			top_speed: '38 mph',
			duration: '1 min',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/2017_sfne_thejoker_gallery11_0-1536x1068.jpg',
			park_id: 'sixFlagsNewEngland[0]._id',
		},
		{
			name: 'The Riddler : Revenge',
			desccription:
				'In the newly expanded GOTHAM CITY you’ll be able to take on all the Super-Villains including THE RIDDLER Revenge, THE JOKER™ 4D Free Fly Coaster, and the all-new HARLEY QUINN™ Spinsanity!',
			height: '109 ft',
			top_speed: '50 mph',
			duration: '1 min 36 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/2018_sfne_trr_6-1536x1026.jpg',
			park_id: 'sixFlagsNewEngland[0]._id',
		},
		{
			name: 'ThuderBolt',
			desccription:
				'At 70 feet tall and zooming over the tracks at 40 miles per hour, this whooshy race over the rails is family friendly, even making for a great transition for younger riders who are in training for the mega-coasters.',
			height: '70 ft',
			top_speed: '40 mph',
			duration: '1 min',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfne_thunderbolt_1440x1533_1_1-768x818.jpg',
			park_id: 'sixFlagsNewEngland[0]._id',
		},
		{
			name: 'Wicked Cyclone',
			desccription:
				'Wicked Cyclone is the first coaster of its kind to have a 200-degree stall and two Zero-G Rolls.  You also experience more airtime than any other coaster in New England on Wicked Cyclone.  ',
			height: '109 ft',
			top_speed: '55 mph',
			duration: '1 min 37 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfne_wickedcyclone_1440x1533_3-768x829.jpg',
			park_id: 'sixFlagsNewEngland[0]._id',
		},
		{
			name: 'Batwing',
			desccription:
				'You actually start this pure flight experience lying on your back. As you ride up the stunning 115-foot lift hill, enjoy the view of the pretty sky, because in just a moment you’ll be flying through it like a wild bat. The angle is so steep, you can look down on the course, so you’ll get a terrifying sneak preview of the twisted steel route you’ll be coursing over on this super thriller.',
			height: '125 ft',
			top_speed: '50 mph',
			duration: '1 min 50 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/WEB-Thumbnail-Batwing-.jpg',
			park_id: 'sixFlagsAmerica[0]._id',
		},
		{
			name: 'Bourbon Street Fireball',
			desccription:
				'You’ll rock back and forth in a uniquely designed train that reverses direction mid-loop. Then, you’ll hang suspended upside down just long enough to catch your breath. This fireball shoots you through a series of heart pounding full-circle revolutions. The unpredictable Bourbon Street Fireball looms high over Mardi Gras classics like Ragin Cajun and Wild One!\n',
			height: '70 ft',
			top_speed: '50 mph',
			duration: '2 min',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/WEB-Thumbnail-Fireball-.jpg',
			park_id: 'sixFlagsAmerica[0]._id',
		},
		{
			name: 'Firebird',
			desccription:
				'Two exhilarating state-of-the-art sit-down floorless trains will glide smooth as silk and run faster at a top speed of 56 mph along a 2,900-foot track. As the experience unfolds, Firebird will take riders on a 9-story drop followed by two inversions, carousel and corkscrew turns, a twisted airtime hill, and a figure-eight finale before returning to the ride platform.',
			height: '100 ft',
			top_speed: '56 mph',
			duration: '2 min',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/WEB-Thumbnail-FIREBIRD-.jpg',
			park_id: 'sixFlagsAmerica[0]._id',
		},
		{
			name: 'The Mind Eraser',
			desccription:
				'You can’t miss this ultra-modern gnarled mass of twisted bright yellow track. Try to wrap your mind around the startling sight of that stunning nest of steel towering in the sky. You’re about to strap into this inverted looping coaster, suspended from the track over your head, with your feet just dangling in the air below you. Try to exhibit some mental control as you climb 115 feet on this tangled track. Actually, your brain isn’t going to be much use to you, so you might as well turn it off and just hang on as you haul up to the top.',
			height: '109 ft',
			top_speed: '50 mph',
			duration: '1 min 36 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/WEB-Thumbnail-Mind-Eraser.jpg',
			park_id: 'sixFlagsAmerica[0]._id',
		},
		{
			name: 'Rajin Cajun',
			desccription:
				'On Ragin’ Cajun, the amount of spinning, twisting and all around dizzying insanity you’ll experience will depend entirely on the riders of each and every ride. Four people at a time load into one-of-a-kind spin cars and launch onto the 1,378-foot-long swooping, soaring, sloping track.',
			height: '43 ft',
			top_speed: '45 mph',
			duration: '2 min 30 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/WEB-Thumbnail-Ragin-Cajun.jpg',
			park_id: 'sixFlagsAmerica[0]._id',
		},
		{
			name: 'Roar',
			desccription:
				'This colossal wooden twister coaster’s epic proportions demand your respect even before you hear the mind-blowing stats. It rises 10 stories in the sky, which means you’ll be taking a drop of 90 feet in the first few seconds, and you’ll be taking it at 50 miles per hour. Bolting over this ingenious and intricate structure, you’ll blast through a 180 degree turn that will leave you speechless—but it probably won’t stop you from screaming. It’s right about now that you realize how Roar got its name.',
			height: '103 ft',
			top_speed: '50 mph',
			duration: '1 min 52 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/WEB-Thumbnail-ROAR.jpg',
			park_id: 'sixFlagsAmerica[0]._id',
		},
		{
			name: 'Superman: Ride of Steel',
			desccription:
				'Welcome to the world of the hypercoaster. This all-new category of roller coaster is so intense they had to come up with a whole new category for it. Hypercoasters are the modern breed of oversized roller coaster that are pumped up to more than 200 feet tall. SUPERMAN: Ride of Steel easily clears that distinction, with a height of 205 feet and a mind-blowing 200-foot drop.',
			height: '222 ft',
			top_speed: '73 mph',
			duration: '2 min 30 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/WEB-Thumbnail-Superman.jpg',
			park_id: 'sixFlagsAmerica[0]._id',
		},
		{
			name: "The Joker's Jinx",
			desccription:
				'They say the key to any great joke is timing. So this hilariously intimidating concoction by the world’s most notorious super villain, THE JOKER, begins with a launch—a very fast launch. THE JOKER’s Jinx has a cutting-edge linear induction motor launch system that will get you from 0 to 60 miles per hour in just over three seconds. That’ll wipe that smirk off your face, as you are shot like a bullet into four inversions compressed into a half-mile pile of twisted steel.',
			height: '105 ft ',
			top_speed: '60 mph',
			duration: '1 min 15 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/WEB-Thumbnail-Jokers-Jinx.jpg',
			park_id: 'sixFlagsAmerica[0]._id',
		},
		{
			name: 'The Wild One',
			desccription:
				'You can’t miss this beautiful, iconic, sprawling piece of wooden architecture on any map of Six Flags. Its ridiculously long form cuts right through the center of the park. At 96 feet tall and zooming over the tracks at 45 miles per hour, this whooshy race over the rails is as classic as it gets.',
			height: '108 ft',
			top_speed: '53 mph',
			duration: '1 min 52 sec',
			image:
				'https://sf-static.sixflags.com/wp-content/uploads/WEB-Thumbnail-Wild-One.jpg',
			park_id: 'sixFlagsAmerica[0]._id',
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
