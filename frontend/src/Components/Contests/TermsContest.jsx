import React from 'react'
import contest from '../../assets/image/contest.jpg'
import { useNavigate } from 'react-router-dom';

const TermsContest = () => {
    const navigate = useNavigate();
    const handleClick =()=>{
        navigate('/submission')
    }
  return (
    <>
         <div>
                <img className="" src={contest} style={{ "height": "80vh", "width": "98vw" }} />
        </div>
                <div className="">
                    <p className="fs-3 my-3 fw-bold">Xnova Contest</p>
                    <p className="my-3 fw-semibold">You are registering for the contest</p>
                    <div className="d-flex justify-content-center align-items-center gap-4 my-5">
                        <input type="checkbox" />
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
