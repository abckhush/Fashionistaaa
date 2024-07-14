import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [credentials, setCredentials] = useState({ password: '' ,name:'',username:'',cpass:''});

    const email = sessionStorage.getItem("email");

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const [error, setError] = useState(''); 
    const navigate = useNavigate(); 
    const host = "http://localhost:5000/api/v1";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await axios.post(`${host}/user/signup`, { name:credentials.name,username:credentials.username,password:credentials.password,cpass:credentials.cpass,email:email ,accountType:"user"});
            console.log(res);
            if(res.data.success){
              alert("User registered successfully. Now please login to continue")
            navigate('/login')
            }
            else{
              setError(res.data.message);
            }
            
            
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError('Error signing up');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="my-5 fw-semibold">Personal Details</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          
  <div class="row mb-4 w-50 m-auto">
    <label for="input" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" name="name" value={credentials.name} onChange={onChange} class="form-control " style={{"border":"1px solid black","outline":"none"}} id="inputEmail3" placeholder='Enter your full name'/>
    </div>
  </div>
  <div class="row mb-4 w-50 m-auto">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Username</label>
    <div class="col-sm-10">
      <input type="text" name="username" value={credentials.username} onChange={onChange} class="form-control " style={{"border":"1px solid black","outline":"none"}} id="inputPassword3" placeholder='Enter your unique username'/>
    </div>
  </div>
  <div class="row mb-4 w-50 m-auto">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" name="password" value={credentials.password} onChange={onChange} class="form-control " style={{"border":"1px solid black","outline":"none"}} id="inputPassword3" placeholder='Enter your password'/>
    </div>
  </div>

  <div class="row mb-4 w-50 m-auto">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Confirm Password</label>
    <div class="col-sm-10">
      <input type="password" name="cpass" value={credentials.cpass} onChange={onChange} class="form-control " style={{"border":"1px solid black","outline":"none"}} id="inputPassword3" placeholder='Confirm your password'/>
    </div>
  </div>



  
  <button type="submit" class="btn my-4" style={{"background":"black","color":"white","padding":"11px 29px","fontWeight":"500"}}>SUBMIT</button>

       
        </form>
    );
}

export default Register;
