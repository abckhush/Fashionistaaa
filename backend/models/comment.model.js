const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    comment:{
        type:String,
        required:true,
    },
    post_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Design',
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
})

module.exports = mongoose.model('Comment',CommentSchema)