const designModel = require('../models/design.model')
const User = require('../models/user.model')
const LikeModel = require('../models/like.model')
const CommentModel = require('../models/comment.model')
const { uploadFileToCloudinary } = require('../utils/cloudinary')


exports.addDesign = async(req, res) => {
    try {
        const {title,description,tags} = req.body
        
        const imgsrc = req.files.file;
        if(!imgsrc){
            return res.status(400).json({
                success:false,
                message:"Image is required"
            })
        }

        const createdBy = req.user.id      

        const supportedTypes = ['png', 'jpg', 'jpeg', 'gif', 'webp',];
        const imgsrcType = imgsrc.name.split('.')[1];

        if (!supportedTypes.includes(imgsrcType)) {
            res.status(400).json({
                success: false,
                message: "File type not supported"
            })
        }

        const imgsrcresponse = await uploadFileToCloudinary(imgsrc, process.env.CLOUDINARY_FOLDER);

        if(!imgsrcresponse){
            return res.status(400).json({
                success:false,
                message:"Image upload failed"
            })
        }

        console.log(imgsrcresponse);

        design = await designModel.create({
            title,
            description,
            tags,
            image: imgsrcresponse.secure_url,
            createdBy
        });

        return res.status(200).json({
            success: true,
            message: "Design added successfully"
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.getRecentDesigns = async(req,res)=>{
    try {
        const designs = designModel.find().sort({created_at:-1});
        if(!designs){
            return res.status(400).json({
                success:false,
                message:"No designs are found"
            })
        }

        return res.status(200).json({
            success:true,
            designs
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.getAllDesigns = async(req,res)=>{
    try {
        const designs = await designModel.find()
        console.log(designs)
        if(!designs){
            return res.status(400).json({
                success:false,
                message:"No designs are found"
            })
        }

        return res.status(200).json({
            success:true,
            designs
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.addLike = async(req,res)=>{
    try {
        const user_id = req.user.id
        const post_id = req.body.postId
        const user = User.findById(user_id);

        if(!user){
            return res.status(404).json({
                success:false,
                message:"You need to register first"
            })
        }

        const design = designModel.findById(post_id);
        if(!design){
            return res.status(400).json({
                success:false,
                message:"Post not found"
            })
        }

        design.likes.push(user_id);
        design.save();

        const like = await LikeModel.create({
            user_id,
            post_id
        })

        return res.status(200).json({
            success:true,
            message:"Post liked successfully"
        })


        

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.removeLike = async(req,res)=>{
    try {
        const user_id = req.user.id
        const post_id = req.body.postId
        const user = User.findById(user_id);

        if(!user){
            return res.status(404).json({
                success:false,
                message:"You need to register first"
            })
        }

        const design = designModel.findById(post_id);
        if(!design){
            return res.status(400).json({
                success:false,
                message:"Post not found"
            })
        }

        design.likes = design.likes.filter(like=>like!==user_id);
        design.save();

        const like = await LikeModel.findOneAndDelete({
            user_id,
            post_id
        })

        return res.status(200).json({
            success:true,
            message:"Post unliked successfully"
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
}

exports.addComment = async(req,res)=>{
    try {
        const comment = req.body.comment
        const user_id = req.user.id
        const post_id = req.body.postId

        const user = User.findById(user_id);
        if(!user){
            return res.status(404).json({
                success:false,
                message:"You need to register first"
            })
        }

        const design = designModel.findById(post_id)
        if(!design){
            return res.status(400).json({
                success:false,
                message:"Post not found"
            })
        }

        //design has comments of refence type so we need to populate it

        const comments = await CommentModel.create({
            user_id,
            post_id,
            comment
        })


        design.comments.push(comments);
        design.save();

        return res.status(200).json({
            success:true,
            message:"Comment added successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.removeComment = async(req,res)=>{
    try {
        const user_id = req.user.id
        const post_id = req.body.postId
        const comment_id = req.body.commentId

        const user = User.findById(user_id);
        if(!user){
            return res.status(404).json({
                success:false,
                message:"You need to register first"
            })
        }

        const design = designModel.findById(post_id)
        if(!design){
            return res.status(400).json({
                success:false,
                message:"Post not found"
            })
        }

        const comment = CommentModel.findById(comment_id);
        if(!comment){
            return res.status(400).json({
                success:false,
                message:"Comment not found"
            })
        }

        design.comments = design.comments.filter(comment=>comment!==comment_id);
        design.save();

        const comments = await CommentModel.findByIdAndDelete(comment_id);

        return res.status(200).json({
            success:true,
            message:"Comment removed successfully"
        })

        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
}

exports.getAllComments = async(req,res)=>{
    try {
        const post_id = req.body.postId
        const design = designModel.findById(post_id);
        if(!design){
            return res.status(400).json({
                success:false,
                message:"Post not found"
            })
        }

        //design has comments of refence type so we need to populate it
        const comments = await CommentModel.find({post_id}).populate('comments');

        return res.status(200).json({
            success:true,
            comments
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
}

exports.getLikes = async(req,res)=>{
    try {
        const post_id = req.body.postId
        const design = designModel.findById(post_id);
        if(!design){
            return res.status(400).json({
                success:false,
                message:"Post not found"
            })
        }

        //design has likes of refence type so we need to populate it
        const likes = await LikeModel.find({post_id}).populate('likes');

        return res.status(200).json({
            success:true,
            likes
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}