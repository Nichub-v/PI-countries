const { Country } = require("../db.js")
const { Op } = require('sequelize');

module.exports = async function(req, res) {

    try {
        if (req.params.id) {
            const country = await Country.findByPk(req.params.id)

            if (!country) throw new Error("ID inexistente.")
            else res.status(200).json(country)
        }

        else if (req.query.name) {
            const countries = await Country.findAll({
                where: {
                    [Op.or]: [
                        {'name.common': {[Op.iLike]: `%${req.query.name}%`}},
                        {'name.official': {[Op.iLike]: `%${req.query.name}%`}}
                    ]
                }
            })

            if (countries[0]) return res.status(200).json(countries)
            else throw new Error("No hay coincidencias.")
        }

        else if (req.query.page) {
            const page = (req.query.page - 1) * req.query.items
            const items = req.query.items
            
            const countries = await Country.findAll({
                offset: page,
                limit: items,
              });

            res.status(200).json(countries)
        }

        else {
            const countries = await Country.findAll()
            res.status(200).json(countries)
        }

    } catch(error) {
        res.status(400).json({ error: `${error}` })
    }
    
}