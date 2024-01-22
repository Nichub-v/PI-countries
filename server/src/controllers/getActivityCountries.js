const { Activity } = require("../db.js")
const { Op } = require('sequelize');

module.exports = async function(req, res) {
    try {
        const activity = await Activity.findOne({
            where: {
                name: req.params.activity
            }
        })
        if (!activity) throw new Error("No existe esa actividad turística.")

        const countries = await activity.getCountries()
        if (!countries) throw new Error("No hay países con esa actividad turística.")

        res.status(200).json(countries)
    } catch(error) {
        res.status(400).json({error: `${error}`})
    }
     
}