const {UkraineNewsModel} = require('./../models')

module.exports = async limit => await UkraineNewsModel.find().sort({date: -1}).limit(+limit)