/**name
 * description
 * height
 * top speed
 * rating?
 * duration
 * url (img)
 * park id
 */
const { Schema } = require('mongoose');

const Coaster = new Schema(

  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    height: { type: String, required: true },
    top_speed: { type: String, required: true },
    duration: { type: String, required: true },
    image: { type: String, required: true },
    park_id: { type: Schema.Types.ObjectId, ref: 'Park' }
  },
  { timestamps: true }
)


module.exports = Coaster;
