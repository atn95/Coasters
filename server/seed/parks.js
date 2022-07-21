const db = require('../db')
const { Park } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const parks = [
    {
      park_name: 'Six Flags Great Adventure',
      city: 'Jackson',
      state: 'NJ',
      coaster_count: 14,
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/sfgad_motion.gif'
    }
  ]

  await Park.insertOne(parks)
  console.log('Created parks!')
}
const run = async () => {
  await main()
  db.close()
}

run()
