const {getUkraineNewsArticleService, getWorldNewsArticleService} = require("./../services")

module.exports = async (req, res) => {
    try {
        const {id} = req.params;
        let data = await getUkraineNewsArticleService(id);

        if (!data)
            data = await getWorldNewsArticleService(id);

        res.json(data)
    } catch (e) {
        throw new Error(e.message)
    }
}