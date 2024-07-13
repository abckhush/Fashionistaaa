import React, { useState } from 'react'
import design from '../../assets/image/design.jpeg'
import './post.css'
import comment from '../../assets/svg/comment-filled.svg'
import heart from '../../assets/svg/heart-filled.svg'

const Post = () => {
    let [over, setOver] = useState(false)
    function onMouseOver() {
      setOver(true)
    }
    function onMouseOut() {
      setOver(false)
    }
  return (
    <>
      <div className="post-container" style={{"position":"relative","display":"inline-block"}} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          <img src={design} alt="post" className="post-image" />
          {over && (
            <div className="likes-overlay">
                <p className="card-text fs-3 gap-4 d-flex align-items-center justify-content-between"><div className="d-flex align-items-center justify-content-center gap-3 fs-5 fw-light"><img className='avatar' src={heart} style={{ "height": "6vh" }} />32 Votes
                    </div>
                        <div className="d-flex align-items-center justify-content-center gap-2 fs-5 fw-light">
                            <img className='avatar' src={comment} style={{ "height": "6vh" }} />3 comments
                        </div>
                    </p>
            </div>
          )}
        </div>
    </>
  )
}

export default Post
