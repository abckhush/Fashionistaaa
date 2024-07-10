import React , {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OtpInput from './OtpInput'
import { set } from 'mongoose'


const VerifyOTP = () => {
    const host = "http://localhost:5050"
    const navigate = useNavigate();
    const email = localStorage.getItem("email")
    const onOtpSubmit = async(otp) => {
        navigate("/register")
        console.log(otp)
        const response = await fetch(`${host}/api/shico/user/verifyotp`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email:email,otp: otp})
        })
        const json = await response.json();
        if(json.success){
            navigate("/register")
        }
        else{
            alert(json.error, "OTP could not be verified")
        }
    };
 
  return (
   <>
        <div className="flex column container login-container">
        <h2 className="my-5 fw-semibold">OTP sent successfully!</h2>
        <p className="fs-4">Enter the OTP sent to your email</p>
        <div>
                    <OtpInput length={4}
                        onOtpSubmit={onOtpSubmit} />
                </div>
      
                <button type="submit" class="btn my-5" style={{"background":"black","color":"white","padding":"11px 29px","fontWeight":"500"}}>VERIFY</button>
            <p >
                Didn't receive an OTP? <Link to="/signup" className="text-decoration-underline">Resend OTP</Link>
            </p>
    

       
    </div>
   </>
  )
}

export default VerifyOTP
