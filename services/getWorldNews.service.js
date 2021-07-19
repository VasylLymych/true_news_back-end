const {worldNewsModel} = require('./../models')

module.exports = async amount => worldNewsModel.find().limit(amount)