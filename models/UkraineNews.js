const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UkraineNewsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("ukraine_news", UkraineNewsSchema)


