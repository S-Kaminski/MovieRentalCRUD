const mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    genre: {
        type: String, 
        required: true
    },
    director:{
        type: String, 
        required: true
    },
    duration: {
        type: Number, 
        required: true
    },
    rating: {
        type: Number, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    actors: {
        type: String, 
        required: true
    },
    added_date: {
        type: Date, 
        required: true
    }
});

const Movie = mongoose.model('movies',movieSchema);
module.exports = Movie;