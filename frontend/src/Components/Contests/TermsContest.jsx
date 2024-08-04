import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TermsContest = () => {
  const id = window.location.pathname.split('/')[2]

  const [data, setData] = useState([])
  const host = 'http://localhost:5000/api/v1'

  const getContestInfo = async () => {
    try {
      const response = await axios.get(`${host}/contest/getContestById/${id}`)

      if (response.data.data) {
        setData(response.data.data)
      }
    } catch (error) {
      alert(error.message)
    }
  }
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false)

    const onChange = (e) => {
        setChecked(e.target.checked)
    }

    const handleClick =()=>{
        if(!checked){
            alert('Please agree to the terms and conditions')
            return
        }
        navigate('/submission')
    }

    useEffect(() => {
        getContestInfo()
    }, [])
  return (
    <>
         <div>
                <img className="" src={data.image} style={{ "height": "42vh", "width": "98vw" ,"objectFit":"cover"}} />
        </div>
                <div className="">
                    <p className="fs-3 my-3 fw-bold">{data.title}</p>
                    <p className="my-3 fw-semibold">You are registering for the contest</p>
                    <div className="d-flex justify-content-center align-items-center gap-4 my-5">
                        <input type="checkbox" onChange={onChange}/>
                        <span className="">* I  have read and agree to the terms and condition for this contest</span>
                    </div>
                    <div className="mb-5 d-flex justify-content-center align-items-center gap-4">
                    <button className="" style={{ "backgroundColor": "#4BF370", "color": "black" }} onClick={handleClick} >Register Now</button>
                    <span className="">Cancel</span>
                    </div>
                </div>
               
          
    </>
  )
}

export default TermsContest
