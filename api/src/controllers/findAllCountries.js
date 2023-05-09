const {Country} = require('../db.js')

const findAllCountries = async() => await Country.findAll()

module.exports =findAllCountries