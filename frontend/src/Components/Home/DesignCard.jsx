import React from 'react'
import design from '../../assets/image/design.jpeg'
import avatar from '../../assets/image/avatar.jpg'
import heart from '../../assets/svg/heart-filled.svg'
import comment from '../../assets/svg/comment-filled.svg'
import { Link } from 'react-router-dom'

const DesignCard = ({onClick}) => {
    return (
        <>
            <div onClick={onClick} className="card text-white" style={{ "width": "20rem", "padding": "0px", "backgroundColor": "#414651" }}>
                <img src={design} className="card-img-top" alt="a design" />
                <div className="card-body">
                    <h5 className="card-title d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            <img className='avatar rounded-circle' src={avatar} />
                            <span className='fw-bold fs-5' style={{"color":"#F4DF70"}}>@XYZ</span>
                        </div>
                        <div className="fs-6 fw-bold">36k followers</div>
                    </h5>
                    <p className="card-text fs-6 fw-bold my-4">Elegant Evening Gown in Royal Blue</p>
                    <p className="card-text d-flex align-items-center justify-content-between"><div className="d-flex align-items-center justify-content-center gap-2 fs-6 fw-light"><img className='avatar' src={heart} style={{ "height": "4vh" }} />32 Votes
                    </div>
                        <div className="d-flex align-items-center justify-content-center gap-2 fs-6 fw-light">
                            <img className='avatar' src={comment} style={{ "height": "4vh" }} />3 comments
                        </div>
                    </p>
                </div>
            </div>
        </>
    )
}

export default DesignCard
