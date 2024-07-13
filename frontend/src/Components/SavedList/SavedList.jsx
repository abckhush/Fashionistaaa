import React from 'react'
import empty from '../../assets/svg/empty.svg'

const SavedList = () => {
  return (
    <div>
        <img src={empty} alt="empty" className="" style={{"width":"35%"}} />
      <p className="fw-light fs-3">You haven't saved anything yet</p>
    </div>
  )
}

export default SavedList
