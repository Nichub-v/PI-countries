const { Activity, Country } = require("../db.js")
const { Op } = require('sequelize');

module.exports = async function(req, res) {
    try {
        const existentActivity = await Activity.findOne({
            where: {
                name: req.body.name
            }
        })

        if (existentActivity) {
            throw new Error("Ya existe una actividad con ese nombre")
        }

        const newActivity = await Activity.create({
            name: req.body.name,
            difficulty: req.body.difficulty,
            duration: req.body.duration,
            seasons: req.body.seasons,
        })

        if (req.body.countries) {
            req.body.countries.forEach(async item => {
                const country = await Country.findByPk(item.id)
    
                newActivity.addCountry(country)
            });
        } else {
            throw new Error("No se indicaron países para la actividad")
        }
       
        res.status(200).json({success: "La actividad se creó correctamente"})
    } catch(error) {
        res.status(400).json({error: `${error}`})
    }
}