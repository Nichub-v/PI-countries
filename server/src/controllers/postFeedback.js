const { Comment } = require("../db.js")


module.exports = async function(req, res) {
    try {
        const newComment = await Comment.create({
            from: req.body.name,
            message: req.body.message,
        })
       
        res.status(200).json({success: "El comentario se envió correctamente"})
    } catch(error) {
        res.status(400).json({error: `${error}`})
    }
}