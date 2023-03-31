const mongoose = require('mongoose');

var rentalSchema = new mongoose.Schema({
    user_phone: {
        type: String,
        required:true
    },
    movie_title:{
        type:String,
        required: true
    },
    rental_date: {
        type: Date,
        required: true
    },
    expected_return: {
        type: Date,
        required: true
    },
    actual_return: {
        type: Date,
        required: false
    }
});

const Rental = mongoose.model('rentals', rentalSchema);
module.exports = Rental;