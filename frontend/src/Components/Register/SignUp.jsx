import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = (props) => {
    const seller = props.seller;    
    const [email, setEmail] = useState('');
    const [error, setError] = useState(''); 
    const navigate = useNavigate(); 
    const host = 'http://localhost:5000/api/v1';

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        setError('');
        
        try {
            const res = await axios.post(`${host}/user/sendotp`, { email });
            console.log(res);
            if(res.data.success){
                sessionStorage.setItem('email', email);
                navigate("/verifyOTP")
            }
            else{
                setError(res.data.message);
            }          
            
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError('Error sending OTP');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {seller ? <h2 className="my-5 fw-semibold">Create your seller account</h2>:
            <h2 className="my-5 fw-semibold">Create your account</h2>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
       
        <p className="fs-4">Enter your email to sign up</p>
             <div className="col-sm-10 mx-auto my-4">
                    <input type="email" required style={{"backgroundColor":"#F0EBEB","padding":"12px 23px","width":"45%"}} class=" form-control m-auto fs-6" id="staticEmail" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="someone@example.com" />
                    </div>
         
   
           
                    <div style={{"margin":"auto","text-align": "right","width":"37%"}}>
                   
                    </div>
        

            <button type="submit" class="btn my-4" style={{"background":"black","color":"white","padding":"11px 29px","fontWeight":"500"}}>Send OTP</button>
            <p >
                Already have an account? <Link to="/signup" className="text-decoration-underline">Login here</Link>
            </p>
        </form>
    );
}

export default Signup;
