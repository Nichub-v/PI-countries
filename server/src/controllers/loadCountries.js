const axios = require("axios");
const { Country } = require("../db.js")

module.exports = async function(req, res) {
    try {  
        const { data } = await axios.get("http://localhost:5000/countries");

        data.forEach(item => {
            Country.create({
                name: item.name,
                flags: item.flags,
                continents: item.continents,
                capital: item.capital,
                subregion: item.subregion,
                area: item.area,
                population: item.population
            })
        })
        
        res.status(200).json(data)
    } catch(error) {
        res.status(500).json({ error })
    }
}