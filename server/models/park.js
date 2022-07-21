/** name
 * city
 * state
 * # of coasters
 * open season
 * url(image or logo)
 */
const { Schema } = require('mongoose');

const Park = new Schema(
	{
		park_name: { type: String, required: true },
		city: { type: String, required: true },
		state: { type: String, required: true },
		coaster_count: { type: Number, required: true },
		open_season: { type: String, required: true },
		image: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = Park;