const {worldNewsModel} = require('./../models')

module.exports = async id => await worldNewsModel.findById(id)