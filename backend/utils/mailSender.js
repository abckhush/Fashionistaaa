const nodemailer = require('nodemailer');
require('dotenv').config();

const mailSender = async (email , title , body)=>{
    try{
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
             //add certification
             port: 465,
             secure: true,
            auth:{
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        })


        let info = await transporter.sendMail({
            from: 'FashionAI',
            to:`${email}`,
            subject: `${title}`,
            html: `${body}`,
        })
        console.log("Email",info);
        return info;
    }
    catch(err){
        console.log(err);
    }
}
module.exports = mailSender;