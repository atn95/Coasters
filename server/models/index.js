const { model } = require('mongoose')
const ParkSchema = require('./park')
const CoasterSchema = require('./coaster')

const Park = model('Park', ParkSchema)
const Coaster = model('Coaster', CoasterSchema)

module.exports = {
  Park,
  Coaster
}
