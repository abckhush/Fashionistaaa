import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const host = "http://localhost:5000/api/v1";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await axios.post(`${host}/user/login`, { email, password });
            console.log(res)
            if(res.data.success){
                alert("User logged in successfully")
                sessionStorage.setItem('token', res.data.accessToken);
                navigate('/');
            }
            
            
            if(!res.data.success) {
                return setError(res.data.message);
            }

            
           
        } catch (err) {
            setError(err.response?.data?.message || 'Error logging in');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="my-5 fw-semibold">Login to your account</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
       
        
             <div className="col-sm-10 mx-auto my-4">
                    <input type="email" required style={{"backgroundColor":"#F0EBEB","padding":"12px 23px","width":"45%"}} class=" form-control m-auto fs-6" id="staticEmail" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                    </div>
         
   
               <div className="col-sm-10 mx-auto my-4">
                    <input type="password" id="inputPassword6" style={{"backgroundColor":"#F0EBEB","padding":"12px 23px","width":"45%"}} class=" form-control m-auto fs-6" aria-describedby="passwordHelpInline" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter your password" />
                    </div>
                    <div style={{"margin":"auto","text-align": "right","width":"37%"}}>
                    <Link to='/forgotpassword' className="text-decoration-underline">Forgot Password?</Link>
                    </div>
        

            <button type="submit" class="btn my-4" style={{"background":"black","color":"white","padding":"11px 29px","fontWeight":"500"}}>LOGIN</button>
            <p >
                Dont have an account? <Link to="/signup" className="text-decoration-underline">Sign up now</Link>
            </p>
        </form>
    );
};

export default Login;
