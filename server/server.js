const express = require('express');
const db = require('./db');
const logger = require('morgan');
const { coaster } = require('./controllers');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(logger('dev'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.get('/', (req, res) => {
	res.send('root successfully loaded');
});

app.get('/coasters', coaster.getCoasters);
