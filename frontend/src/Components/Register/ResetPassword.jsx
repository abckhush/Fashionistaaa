import React , {useState} from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
import loadinggif from '../../assets/loading.gif'

const Reset=()=> {
    let navigate = useNavigate();
    
    const [email,setEmail] =useState("")
    const onChange = (e) => {
        setEmail(e.target.value)
    }

    const [load,setLoad] = useState(false)
    
    const host = "http://localhost:5000/api/v1"

    const handleSubmit = async(e)=>{
        setLoad(true)
        try {
            e.preventDefault()
            const response = await axios.post(`${host}/user/resetToken`,{email:email})
            
            
    
            if(response.data.success){
                setLoad(false)
                alert('Password reset link sent to your email!')
            }
            else{
                setLoad(false)
                alert(json.message)
            }
        } catch (error) {
            setLoad(false)
            alert(error.message)
        }
    }
        
    
    return (
      <>
      {load && <><img src={loadinggif} alt="loading" style={{"width":"30px","height":"29px","position":"absolute","top":"17%","left":"50%","transform":"translate(-50%,-50%)"}}/></>}
      <div className="m-auto ">          
          <form action="post" onSubmit={handleSubmit}>
          <p className="fw-semibold my-5 fs-4">Reset link will be sent to email</p>
           
             <div className="col-sm-10 mx-auto my-4">
                    <input type="email" required style={{"backgroundColor":"#F0EBEB","padding":"12px 23px","width":"45%"}} class="form-control m-auto fs-6" id="staticEmail" value={email} onChange={onChange} placeholder="Enter your email" />
                    </div>
         
                    <button type="submit" class="btn my-4" style={{"background":"black","color":"white","padding":"11px 29px","fontWeight":"500"}}>Send Link</button>             
          </form> 
         
      </div>
      </>
    )
  }
  

export default Reset