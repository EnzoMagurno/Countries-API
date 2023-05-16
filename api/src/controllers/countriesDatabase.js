const axios = require('axios')
const { Country } = require('../db.js');
const {API} = process.env;
require('dotenv').config();

const countriesDatabase = async(req,res) =>{
    try {
        const response = (await axios.get(API)).data
        const data = response.map(country=>{
            return{
            id:country.cca3,
            name:country.name.common,
            flag:country.flags.png,
            capital:country.capital,
            continent:country.continents,
            subregion:country.subregion,
            area:country.area,
            population:country.population,
        }})
        const bdd = await Country.bulkCreate(data)
        res.status(200).send(bdd)
    } catch (error) {
        res.status(400).send(error)
    }
}
module.exports = countriesDatabase