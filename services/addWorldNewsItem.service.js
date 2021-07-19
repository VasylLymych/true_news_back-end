const {worldNewsModel} = require('./../models')

module.exports = async data => await worldNewsModel.create(data)