const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    path:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
})

module.exports = mongoose.model('File', fileSchema)
