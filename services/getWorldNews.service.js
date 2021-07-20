const {worldNewsModel} = require('./../models')

module.exports = async limit => worldNewsModel.find().sort({date: -1}).limit(+limit)