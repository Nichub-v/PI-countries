const { Activity, Country } = require("../db.js")
const { Op } = require('sequelize');

module.exports = async function(req, res) {
    try {
        const newActivity = await Activity.create({
            name: req.body.name,
            difficulty: req.body.difficulty,
            duration: req.body.duration,
            season: req.body.season,
        })

        if (req.body.countries) {
            req.body.countries.forEach(async item => {
                const country = await Country.findByPk(item.id)
    
                newActivity.addCountry(country)
            });
        } else {
            throw new Error("No se indicaron países para la actividad")
        }
       

        

        res.status(200).json(newActivity)
    } catch(error) {
        res.status(400).json({error: `${error}`})
    }
}