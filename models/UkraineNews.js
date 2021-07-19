const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UkraineNewsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
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


