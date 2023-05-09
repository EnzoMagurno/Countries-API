const {Country} = require('../db.js')
const findCountryById = async(id) =>await Country.findByPk(id)
module.exports = findCountryById