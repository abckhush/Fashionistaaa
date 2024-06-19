import React from 'react'
import dress from '../../assets/image/design.jpeg'
import avatar from '../../assets/image/avatar.jpg'
import heart from '../../assets/svg/heart.svg'
import comment from '../../assets/svg/comment.svg'

const ProductPage = () => {
  return (
    <>
      <div class="card text-white" style={{ "width": "100%", "padding": "0px", "backgroundColor": "#414651" }}>
                <img src={dress} class="card-img-top" alt="a design" />
                <div class="card-body">
                    <h5 class="card-title d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            <img className='avatar rounded-circle' src={avatar} />
                            <span className='fw-bold fs-5' style={{"color":"#F4DF70"}}>@XYZ</span>
                        </div>
                        <div className="fs-6 fw-bold">36k followers</div>
                    </h5>
                    <p class="card-text fs-6 fw-bold my-4">Elegant Evening Gown in Royal Blue</p>
                    <p class="card-text d-flex align-items-center justify-content-between"><div className="d-flex align-items-center justify-content-center gap-2 fs-6 fw-light"><img className='avatar' src={heart} style={{ "height": "4vh" }} />32 Votes
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

export default ProductPage
