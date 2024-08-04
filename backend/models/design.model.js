const mongoose = require('mongoose')

const designSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Like',
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment',
    }],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    tags:[
        {
            type:String,
        }
    ]
})

module.exports = mongoose.model('Design',designSchema)