const mongoose = require('mongoose')
const { MONGO_URL } = require('../config/envs')

const conn = mongoose.createConnection(MONGO_URL)

// Character.find().populate('films', ["_id", "title"]).then((res) => console.log(res[0]))
// Film.find().populate('planets', ["_id", "name"]).then((res) => console.log(res[0]))
module.exports = {
	Character: conn.model('Character', require('./schemas/characterSchema')),
	Film: conn.model('Film', require('./schemas/filmsSchema')),
	Planet: conn.model('Planet', require('./schemas/planetsSchema'))
}

