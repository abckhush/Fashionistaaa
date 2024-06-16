import React from 'react'
import { useNavigate } from 'react-router-dom'

const ColorGenerateHome = () => {
    const navigate = useNavigate()

    const handleClick = () =>{
        navigate('/inputColorGenerate')
    }

  return (
    <div className='my-5' style={{"margin":"52px auto","height":"78vh"}}>
      <h2 style={{"fontWeight":"700","fontSize": "34px"}}>Discover the Perfect Dress Color with AI</h2>
      <p className="w-75 fs-5 mx-auto my-5">Our advanced AI technology helps you find the perfect dress color tailored to your preferences and style. By considering factors like the occasion, your skin tone, and personal style, our AI ensures that you always look your best.</p>
      <p className="fs-5 my-2">Start by providing a few details, and let us do the magic!</p>
        <button className="btn bg-dark text-light my-4 fs-4 p-1 " style={{"width": "16%"}} onClick={handleClick}>Get Started</button>
    </div>
  )
}

export default ColorGenerateHome
