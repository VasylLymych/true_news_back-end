const {UkraineNewsModel} = require('./../models')

module.exports = async amount => await UkraineNewsModel.find().limit(amount)