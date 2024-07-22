const mongoose = require('mongoose');


const profileSchema = new mongoose.Schema({
    dob:{
        type:Date,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    avatar:{
        type:String
    },
    location:{
        type:String
    }
})

module.exports = mongoose.model('Profile',profileSchema);