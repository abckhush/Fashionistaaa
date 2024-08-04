const mongoose = require('mongoose');


const profileSchema = new mongoose.Schema({
    dob:{
        type:Date,
    },
    gender:{
        type:String,
    },
    avatar:{
        type:String
    },
    location:{
        type:String
    }
})

module.exports = mongoose.model('Profile',profileSchema);