const { Park } = require('../models')

const getAllParks = async (req, res) => {
  try {
    const parks = await Park.find({})
    if (parks.length > 0) {
      res.json(parks)
    } else {
      res.send('no parks found')
    }
  } catch (error) {
    console.log(error)
  }
}

const getParkByID = async (req, res) => {
  try {
    const { id } = req.params
    let park = await Park.findById(id)
    if (park) {
      res.json(park)
    } else {
      res.send('invalid park')
    }
  } catch (error) {}
}

module.exports = {
  getAllParks,
  getParkByID
}
