const { Activity } = require("../db.js")
const { Op } = require('sequelize');

module.exports = async function(req, res) {

    try {
        const allActivities = await Activity.findAll()

        res.status(200).json(allActivities)
    } catch(error) {
        res.status(400).json({error: `${error}`})
    }
    
}