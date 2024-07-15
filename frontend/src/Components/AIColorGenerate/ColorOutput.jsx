import React from 'react'
import { useLocation } from 'react-router-dom';

const ColorOutput = () => {
  // Use useLocation to get the state passed via navigate
  const location = useLocation();
  const { color, outfit,hexcode } = location.state

  return (
    <div>
        <div className="w-25 text-center m-auto my-5 rounded" style={{background:hexcode,"height":"35vh"}}></div>
        <h2 className='fw-bold fs-2'>Your Dress Color is : <span className='' style={{"color":hexcode}}>{color}</span></h2>
        <div className="my-5"><span className='mx-3 fs-3 fw-semibold'>Outfit Suggestion : </span>
        <span className=" fs-4 ">{outfit}</span>
        </div>
    </div>
  )
}

export default ColorOutput
