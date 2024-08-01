const mongoose = require('mongoose')

const LikeSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Like',LikeSchema)