const Profile = require("../models/profile.model")
const User = require("../models/user.model")

exports.getProfile = async(req,res)=>{
    try {
        const user_id = req.user.id;

        if(!user_id){
            return res.status(400).json({
                success:false,
                message:"User id not found"
        })
    }

    const user_details = await User.findById(user_id).populate('additionalDetails');
    if(!user_details){
        return res.status(400).json({
            success:false,
            message:"User not found"
        })

    }

    return res.status(200).json({
        success:true,
        profile:user_details.additionalDetails
    })


    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.editProfile = async(req,res)=>{
    try {
        const user_id = req.user.id;
        if(!user_id){
            return res.status(400).json({
                success:false,
                message:"User id not found"
            })
        }

        const {name,username, gender,dob,location} = req.body;

        if(name || username ){
            const user = await User.findByIdAndUpdate(user_id,{
                name,
                username,
            })
        }
        if(gender || dob || location ){
        const profile = await Profile.findOneAndUpdate({user:user_id},{
            gender,
            dob,
            location,
            
        })
        if(!profile){
            return res.status(400).json({
                success:false,
                message:"Profile not found"
            })
        }
    }

    return res.status(200).json({
        success:true,
        message:"Profile updated successfully"
    })


        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
    })
}
}

exports.changeAvatar = async(req,res)=>{
    try {
        const user_id = req.user.id;
        if(!user_id){
            return res.status(400).json({
                success:false,
                message:"User id not found"
            })
        }

        const {avatar} = req.body;

        const profile = await Profile.findOneAndUpdate({user:user_id},{
            avatar
        })
        if(!profile){
            return res.status(400).json({
                success:false,
                message:"Profile not found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Avatar updated successfully"
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}