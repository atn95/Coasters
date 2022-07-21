const express = require('express')
const db = require('./db')
const logger = require('morgan')
const dbCalls = require('./controllers')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(logger('dev'))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => {
  res.send('root successfully loaded')
})

app.get(

  '/coasters',
  (req, res, next) => {
    console.log(dbCalls.coaster)
    // res.send('testing');
    next()
  },
  dbCalls.coaster.getAllCoasters
)

app.get(
  '/coasters/:id',
  (req, res, next) => {
    console.log('called')
    next()
  },
  dbCalls.coaster.getCoasterByID
)

app.get(
  '/parks',
  (req, res, next) => {
    console.log(dbCalls.park)
    next()
  },
  dbCalls.park.getAllParks
)

app.get(
  '/parks/:id',
  (req, res, next) => {
    console.log('called')
    next()
  },
  dbCalls.park.getParkByID
)
=======
	'/coasters/:id',
	(req, res, next) => {
		console.log('called');
		next();
	},
	dbCalls.coaster.getCoasterByID
);

app.get(
	'/coasters',
	(req, res, next) => {
		console.log(dbCalls.coaster);
		// res.send('testing');
		next();
	},
	dbCalls.coaster.getAllCoasters
);

