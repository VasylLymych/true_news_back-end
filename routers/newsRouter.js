const newsRouter = require("express").Router();
const {
    getUkraineNewsByParams,
    getWorldNewsByParams,
    getNewsArticle
} = require("./../controllers")

newsRouter.get("/UkraineNews", getUkraineNewsByParams)
newsRouter.get("/worldNews", getWorldNewsByParams)
newsRouter.get("/:id", getNewsArticle)

module.exports = newsRouter