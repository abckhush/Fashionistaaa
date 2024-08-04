import React from 'react'
import contest from '../../assets/image/contest.jpg'
import clock from '../../assets/svg/clock.svg'
import users from '../../assets/svg/users.svg'
import { useNavigate } from 'react-router-dom'

const ContestCard = (props) => {
    const {ended} = props
    const title = props.title
    const deadline = props.deadline
    const id = props.id
    console.log(id)
    const registered = props.registered
    const image = props.image
    console.log(title)
    const navigate = useNavigate();

    const handleRegister =() =>{
        navigate(`/contestpage/${id}`)
    }
  return (
    <>
      <div class="card" style={{"width": "33rem"}}>
  <img src={image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text d-flex justify-content-between">
       <p className="fw-semibold">{title}</p>
         {ended ? <p className="fw-semibold" style={{"color":"red"}}>Ended</p> :
       <p className="fw-semibold" style={{"color":"green"}}>Live</p>}
    </p>
    <p className="text-start">
        <img src={clock} alt="clock" style={{"width":"20px"}}/>
        <span>{deadline}</span>
    </p>
    <p className="text-start">
        <img src={users} alt="users" style={{"width":"20px"}}/>
        <span> {registered} registered</span>
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
