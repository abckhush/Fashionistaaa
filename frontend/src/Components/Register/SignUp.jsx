import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        navigate('/verifyOTP')
        // e.preventDefault();
        // setError('');
        // try {
        //     const res = await axios.post('http://localhost:5000/signup', { username, email, password });
        //     localStorage.setItem('token', res.data.token);
        //     navigate('/login');
        // } catch (err) {
        //     if (err.response && err.response.data && err.response.data.message) {
        //         setError(err.response.data.message);
        //     } else {
        //         setError('Error signing up');
        //     }
        // }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="my-5 fw-semibold">Create your account</h2>
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
