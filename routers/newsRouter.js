const newsRouter = require("express").Router();
const {getUkraineNewsByParams, getWorldNewsByParams} = require("./../controllers")

newsRouter.get("/UkraineNews", getUkraineNewsByParams)
newsRouter.get("/worldNews", getWorldNewsByParams)

module.exports = newsRouter