import React from 'react'
import ContestCard from './ContestCard.jsx'

const Contests = () => {
  return (
    <>
    <div className="d-flex m-5 justify-content-between align-items-center">
      <h2 style={{"fontWeight":"600","fontSize": "30px"}}>Ongoing Fashion Contests</h2>
      <h2 style={{"fontWeight":"400","fontSize": "20px"}}>See all</h2>
      </div>
      <div className="d-flex" style={{"justifyContent":"flex-start","gap":"72px","margin":"55px"}}>
        <ContestCard/>
        <ContestCard/>
        
      </div>

      <div className="d-flex m-5 justify-content-between align-items-center">
      <h2 style={{"fontWeight":"600","fontSize": "30px"}}>Past Contests</h2>
      <h2 style={{"fontWeight":"400","fontSize": "20px"}}>See all</h2>
      </div>
      <div className="d-flex" style={{"justifyContent":"flex-start","gap":"72px","margin":"55px"}}>
        <ContestCard ended="true"/>
        <ContestCard ended="true"/>
        <ContestCard ended="true"/>
       
      </div>

      
      <h2 className='text-start m-5' style={{"fontWeight":"600","fontSize": "30px"}}>About Contests</h2>

      <p className="text-start m-5 fw-medium">
      Welcome to the Virtual AI-Generated Fashion Contest, where technology meets creativity! This contest is designed to celebrate the innovative designs generated through the power of artificial intelligence. Whether you’re a fashion enthusiast, a designer, or simply someone who loves to experiment with style, this is your chance to showcase your unique creations.
      <p className="text-decoration-italic">Unleash Your Creativity with AI !
      </p>
      </p>
      

      <p className="text-start fw-bold text-decoration-underline m-5">How It Works</p>
      
      <div className="text-start m-5">
        <p className="fw-bolder " style={{"color":"#403D3D"}}>1. Generate your designs</p>
        <p className="fw-normal">Use our advanced AI tool to create stunning dress designs tailored to your preferences. Play with different styles, colors, and patterns to bring your vision to life.</p>
      </div>

      <div className="text-start m-5">
        <p className="fw-bolder " style={{"color":"#403D3D"}}>2. Submit Your Design:</p>
        <p className="fw-normal">Once you’ve crafted the perfect design, submit it through our easy-to-use contest entry form. Provide a brief description of your design and the inspiration behind it.</p>
      </div>
      

      <div className="text-start m-5">
        <p className="fw-bolder " style={{"color":"#403D3D"}}>3. Share and Vote</p>
        <p className="fw-normal">Spread the word by sharing your design on social media with the hashtag #AIFashionContest. Encourage your friends and followers to vote for your entry.</p>
      </div>
      
      
      
    </>
  )
}

export default Contests
