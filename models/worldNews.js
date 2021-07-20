const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const worldNewsSchema = new Schema({
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

module.exports = mongoose.model("world_news", worldNewsSchema)