const jwt=require('jsonwebtoken');
const User = require('../models/user.model')
require('dotenv').config();

exports.auth = async (req,res,next)=> {
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            let token = req.headers.authorization.split(' ')[1];
            if(!token){
                res.status(400).json({
                    success:false,
                    message:'Not Authorized, No Token'
                })
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            res.status(400).json({
                success:false,
                message:'Not Authorized, Token Failed'
            })
        }
    }
  
}

exports.isUser = async(req,res,next)=>{
  try {
 
      if(req.user.role === 'user'){

          next();
      }else{
        res.status(400).json({
            success:false,
            message:'Not Authorized, Only Buyer Can Access'
        })
      }
  } catch (error) {
    res.status(400).json({
        success:false,
        message:error.message
    })
    
  }
}

exports.isOrganiser = async(req,res,next)=>{
    try {
        if(req.user.role === 'organiser'){
            next();
        }else{
            res.status(400).json({
                success:false,
                message:'Not Authorized, Only organiser Can Access'
            })
        }
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
  }