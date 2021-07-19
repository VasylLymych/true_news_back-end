const {getUkraineNewsService} = require("./../services")

module.exports = async (req, res) => {
    try {
        const data = await getUkraineNewsService(req.params.limit)
        res.json(data)
    } catch (e) {
        throw new Error(e.message)
    }
}