const User = require('../models/user.model');
const Profile = require('../models/profile.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mailSender = require('../utils/mailSender')
const sendOTPTemplate = require('../mailTemplates/SendOTP')
const OTP = require('../models/otp.model')

exports.sendOTP = async(req,res)=>{
    try{
        const {email} = req.body;
        if(!email){
            return res.status(400).json({
                success:false,
                message:'Email is required'
            })
        }

        const user = await User.findOne({email:email});
        if(user){
            res.status(400).json({
                success:false,
                message:'User already exists'
            })
        }

        let otp = '';
        for (let i = 0; i < 4; i++) {
          otp += Math.floor(Math.random() * 10); // Generate a random digit
        }
        const alreadyExists = await OTP.findOne({otp:otp});

        if(alreadyExists){
            for (let i = 0; i < length; i++) {
                otp += Math.floor(Math.random() * 10); // Generate a random digit
              }

            const alreadyExists = await OTP.findOne({otp:otp});
        }

        const otpPayload = {email:email,otp:otp};


        const newOTP = await OTP.create(otpPayload);
        console.log(newOTP);

        return res.status(200).json({
            success:true,
            message:"OTP sent successfully"
    })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}

exports.verifyOTP = async(req,res)=>{
    try{
        const {otp,email} = req.body;
        const recentOtp = await OTP.findOne({email:email}).sort({createdAt:-1}).limit(1);
      console.log(recentOtp);
     if(!recentOtp){
        return res.status(400).json({
            success:false,
            message:"OTP not found"
            
        })
        
     }
   
     if(recentOtp.otp !== otp){
        return res.status(400).json({
            success:false,
            message:"OTP is incorrect"
            
        })}

    return res.status(200).json({
            success:true,
            message:"OTP is correct"
        })
     

    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

exports.signUp = async(req,res)=>{
    try{
      const {name,username,email,password,cpass,accountType} = req.body;

        let user_email = await User.findOne({email:email});
        if(user_email){
          return res.status(400).json({
              success:false,
              message:'Email ALready exists'
          })
        }
  
        if(password!==cpass){
          return res.status(400).json({
              success:false,
              message:"Confirm Password do not match"
              
          })
        }

        let user_name = await User.findOne({
                username:username
        });

        if(user_name){
                return res.status(400).json({
                    success:false,
                    message:"Username already exists"
                })
            }
        
  
        const secPass = await bcrypt.hash(password,10);
        // let approved = ""
        // approved === "Seller" ? (approved = false) : (approved = true)
        // const profileDetails = await Profile.create({
        //   gender: null,
        //   dateOfBirth: null,
        //   avatar:"",
        // })
  
        const user = await User.create({
          name,
          username,
          email,
          password: secPass,
          role: accountType
        })

       
        
        user.save();

        const profileDetails = await Profile.create({
            user:user._id,
            gender: null,
            dateOfBirth: null,
            avatar:"",
            location:"",
          })
  
        return res.status(201).json({
          success:true,
          user,
          message:"User Registered Successfully",
        })
    }catch(error){
        console.error('Error during signup:', error);
      return res.status(500).json({
          success:false,
          message:error.message,
      })
    }
  
  }

  exports.login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email||!password){
          res.status(400).json({
              success:false,
              message:'Fill details carefully'
          })
        }
  
        var user = await User.findOne({email:email}).populate("additionalDetails");
  
        if(!user){
          res.status(400).json({
              success:false,
              message:"User Not Found"
          })
        }
  
        const payload = {
            id:user._id,
            email:user.email,
            role:user.role,
        }
        if(await bcrypt.compare(password,user.password)){
            const token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"1d",
            });
            user = user.toObject();
            user.accessToken = token;
            user.password = undefined;
            const options = {
                expiresIn: new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token",token,options).status(200).json(
              {
                  success:true,
                  user:user,
                  accessToken:token,
                  message:"User Logged In Successfully"
              }
      )
        }
        else{
            return res.status(403).json({
                success:false,
                message:'Please login with correct credentials',
            })
        }
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
  }
  
exports.userProfile = async(req,res)=>{
    try{
        const user = await User.findById(req.user.id)
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User not found"
            })
        }
        return res.status(200).json({
            success:true,
            user:user,
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

exports.getSavedDesigns = async(req,res)=>{
    try {
        const {user_id} = req.user;
        const user = await User.findById(user_id).populate('savedDesigns');
        
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User not found"
            })
        }

        return res.status(200).json({
            success:true,
            savedDesigns:user.savedDesigns
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.deleteAccount = async(req,res)=>{
    try {
        const {user_id} = req.user;
        if(!user_id){
            return res.status(400).json({
                success:false,
                message:"User id not found"
            })
        }

        const user = await User.findByIdAndDelete(user_id);
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User not found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"User deleted successfully"
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}