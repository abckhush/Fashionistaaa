import React from 'react'
import contest from '../../assets/image/contest.jpg'
import clock from '../../assets/svg/clock.svg'
import users from '../../assets/svg/users.svg'
import { useNavigate } from 'react-router-dom'

const ContestCard = (props) => {
    const {ended} = props
    const navigate = useNavigate();

    const handleRegister =() =>{
        navigate('/contestpage')
    }
  return (
    <>
      <div class="card" style={{"width": "18rem"}}>
  <img src={contest} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text d-flex justify-content-between">
       <p className="fw-semibold">Elite Runway Contest</p>
         {ended ? <p className="fw-semibold" style={{"color":"red"}}>Ended</p> :
       <p className="fw-semibold" style={{"color":"green"}}>Live</p>}
    </p>
    <p className="text-start">
        <img src={clock} alt="clock" style={{"width":"20px"}}/>
        <span> 17 July,2024  08:00 p.m. (I.S.T)</span>
    </p>
    <p className="text-start">
        <img src={users} alt="users" style={{"width":"20px"}}/>
        <span> 20 registered</span>
    </p>
    {ended ? <button type="submit" class="btn my-2" style={{"background":"black","color":"white","padding":"11px 19px","fontWeight":"500"}} onClick={handleRegister}>See Winners</button> :
    <button type="submit" class="btn my-2" style={{"background":"black","color":"white","padding":"11px 19px","fontWeight":"500"}} onClick={handleRegister}>Register Now</button>
    } 
  </div>
</div>
    </>
  )
}

export default ContestCard
