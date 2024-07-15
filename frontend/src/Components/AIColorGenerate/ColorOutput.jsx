import React from 'react'

const ColorOutput = () => {

  return (
    <div>
        <div className="w-25 text-center m-auto my-5 rounded" style={{"background":"teal","height":"35vh"}}></div>
        <h2 className='fw-bold fs-2'>Your Dress Color is : <span className='' style={{"color":"teal"}}>TEAL</span></h2>
        <div className="my-5"><span className='mx-3 fs-3 fw-semibold'>Outfit Suggestion : </span>
        <span className=" fs-4 ">Pair a mustard yellow dress with neutral accessories like white sneakers or beige sandals for a casual and modern look. Add a light denim jacket for an added layer of style.</span>
        </div>
    </div>
  )
}

export default ColorOutput
