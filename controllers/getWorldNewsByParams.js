const {getWorldNewsService} = require("./../services")

module.exports = async (req, res) => {
    try {
        const {limit} = req.params;

        const data = await getWorldNewsService(req.query.limit)

        res.json(data)
    } catch (e) {
        throw new Error(e.message)
    }
}