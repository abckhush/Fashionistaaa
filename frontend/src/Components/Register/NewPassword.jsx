import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const NewPass=()=> {
    let navigate = useNavigate();

    const token = window.location.pathname.split('/')[2]
    console.log(token)

    const [credentials , setCredentials] = useState({pass:"",cpass:""})

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    
    const host = "http://localhost:5000/api/v1"
    const [load,setLoad] = useState(false)

    const handleSubmit = async(e)=>{
       setLoad(true)
        try {
            e.preventDefault()
            const response = await axios.post(`${host}/user/resetPassword`,
              { 
                    token:token,
                    password:credentials.pass,
                    confirmPassword:credentials.cpass,
                }
      
            )
            
    
            if(response.data.success){
                setLoad(false)
                alert('Password reset successfully')
            }
            else{
                setLoad(false)
                alert(json.message)
            }
        } catch (error) {
            setLoad(false)
            alert(error.response.data.message)
        }
    }
        
    
    return (
      <>
     
      <div className="login-container container flex column">          
          <form action="post" onSubmit={handleSubmit}>
          <p className="my-5 fw-semibold fs-4">Set your new password</p>
             <div className=" flex-column">
             <div className="col-sm-10 mx-auto my-4">
                    <input type="password" name="pass" required style={{"backgroundColor":"#F0EBEB","padding":"12px 23px","width":"45%"}} class="form-control m-auto fs-6" id="staticEmail" value={credentials.pass} onChange={onChange} placeholder="Enter your password" />
                    </div>
                    <div className="col-sm-10 mx-auto my-4">
                    <input type="password" name="cpass" required style={{"backgroundColor":"#F0EBEB","padding":"12px 23px","width":"45%"}} class="form-control m-auto fs-6" id="staticEmail" value={credentials.cpass} onChange={onChange} placeholder="Confirm your password" />
                    </div>
            
              </div>
              <button type="submit" class="btn my-4" style={{"background":"black","color":"white","padding":"11px 29px","fontWeight":"500"}}>Reset</button>
             
          </form> 
         
      </div>
      </>
    )
  }

export default NewPass