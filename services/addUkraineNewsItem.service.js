const {UkraineNewsModel} = require('./../models')

module.exports = async data => await UkraineNewsModel.create(data)
