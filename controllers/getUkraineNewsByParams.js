const {getUkraineNewsService} = require("./../services")

module.exports = async (req, res) => {
    try {
        const {limit} = req.query;

        const data = await getUkraineNewsService(req.query.limit);

        res.json(data);
    } catch (e) {
        throw new Error(e.message)
    }
}