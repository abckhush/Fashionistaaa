const mongoose = require('mongoose')

const contestSchema = mongoose.Schema({
    name:{
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
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    deadline:{
        type:Date,
        required:true,
    },
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
        }
    ],
    prize:{
        type:Number,
        required:true,
    },
    tags:[
        {
            type:String,
        }
    ],
    gallery:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Design',
    },
    winner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
})

module.exports = mongoose.model('Contest',contestSchema)