const express = require('express');
const router = express.Router();

const {sendOTP,verifyOTP,signUp,login,userProfile} = require('../controller/user.controller')
const {generateResetToken,resetPass} = require('../controller/resetpass.controller')
const {auth} = require('../middleware/auth')

router.post('/sendotp', sendOTP)
router.post('/verifyotp',verifyOTP)
router.post('/signup',signUp)
router.post('/login',login)
router.get('/profile',auth,userProfile)
router.post('/resetToken',generateResetToken)
router.post('/resetPassword',resetPass)


module.exports = router;