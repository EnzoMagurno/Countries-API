const { Country } = require('../db.js');
const {Op} = require('sequelize')

const findCountryByName = async(name)=>await Country.findAll({where:{name:{[Op.iLike]:`%${name}%`}}})



module.exports = findCountryByName