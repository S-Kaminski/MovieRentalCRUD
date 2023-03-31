const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    surname:{
        type:String,
        required: true
    },
    adress:{
        type:String,
        required:true
    },
    phone_number:{
        type:String,
        required:true
    }, 
    registration_date:{
        type:Date,
        required:false
    }
});

const User = mongoose.model('users',userSchema);
module.exports = User;