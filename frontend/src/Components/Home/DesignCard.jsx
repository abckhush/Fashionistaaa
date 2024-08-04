import React from 'react'
import design from '../../assets/image/design.jpeg'
import avatar from '../../assets/image/avatar.jpg'
import heart from '../../assets/svg/heart-filled.svg'
import comment from '../../assets/svg/comment-filled.svg'
import { Link, useNavigate } from 'react-router-dom'

const DesignCard = ({onClick,design}) => {
    const navigate = useNavigate()
    const username = "XYZ"
    const handleUser = ()=>{
        navigate(`/profile/${username}`)
    }
    console.log(design)
    return (
        <>
            <div  className="card text-white" style={{ "width": "20rem", "padding": "0px", "backgroundColor": "#414651" }}>
                <img onClick={onClick} src={design.image} className="card-img-top" alt="a design" />
                <div className="card-body">
                    <h5 className="card-title d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            <img className='pe-auto avatar rounded-circle' src={avatar} />
                            <span className='fw-bold fs-5 ' onClick={handleUser} style={{"color":"#F4DF70","cursor":"pointer"}}>{design.createdBy}</span>
                        </div>
                        
                    </h5>
                    <p className="card-text fs-6 fw-bold my-4">{design.title}</p>
                    <p className="card-text d-flex align-items-center justify-content-between"><div className="d-flex align-items-center justify-content-center gap-2 fs-6 fw-light"><img className='avatar' src={heart} style={{ "height": "4vh" }} />{design.likes} Votes
                    </div>
                        <div className="d-flex align-items-center justify-content-center gap-2 fs-6 fw-light">
                            <img className='avatar' src={comment} style={{ "height": "4vh" }} />{design.comments} comments
                        </div>
                    </p>
                </div>
            </div>
        </>
    )
}

export default DesignCard
