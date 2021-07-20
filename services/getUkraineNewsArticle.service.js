const {UkraineNewsModel} = require('./../models')

module.exports = async id => await UkraineNewsModel.findById(id)