import React , {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OtpInput from './OtpInput'
import { set } from 'mongoose'
import axios from 'axios';
import logingif from "../../assets/loading.gif"


const VerifyOTP = () => {
    const host = "http://localhost:5000/api/v1";
    const navigate = useNavigate();
    const [error, setError] = useState(''); 
    const [loading, setLoading] = useState(false);
    const email = sessionStorage.getItem("email")
    
    const onOtpSubmit = async(otp) => {
        setError('');
        setLoading(true)
     
       try {
         const response = await axios.post(`${host}/user/verifyotp`,{email,otp});
         if(response){
             setLoading(false)
         }
         if(response.data.success){
             setLoading(false)
             navigate("/register")
            
         }
         else{
             setLoading(false)
             setError(response.data.message);
         }
       } catch (error) {
        setLoading(false)
        setError(error.response ? error.response.data.message : 'An error occurred');
       }
    };
 
  return (
   <>
   {loading && <><img src={logingif} alt="loading" style={{width:"30px",height:"29px",position:"absolute",top:"17%",left:"50%",transform:"translate(-50%,-50%)"}}/></>}
        <div className="flex column container login-container">
        {error && <p style={{ color: 'red' }}>{error}</p>}
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
