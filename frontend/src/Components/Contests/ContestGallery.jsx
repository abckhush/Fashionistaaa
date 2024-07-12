import React from 'react'
import contest from '../../assets/image/contest.jpg'
import DesignCard from '../Home/DesignCard'

const ContestGallery = () => {
  return (
    <>
        <div>
            <div className="" style={{"padding":"8%","fontSize":"29px","width": "98vw","height":"42vh","background":" #00000078","position":" absolute","left":" 5px","fontWeight":" 700","color":" white"}}>XnOva Contest Gallery</div>
                <img className="" src={contest} style={{ "height": "42vh", "width": "98vw" ,"objectFit":"cover"}} />
            </div>

   <div className="d-flex m-5 justify-content-between align-items-center">
      <h2 style={{"fontWeight":"600","fontSize": "30px"}}>MOST VOTED</h2>
      <h2 style={{"fontWeight":"400","fontSize": "20px"}}>See all</h2>
      </div>
      <div className="d-flex" style={{"justifyContent":"flex-start","gap":"72px","margin":"55px"}}>
        <DesignCard/>
        <DesignCard/>       
      </div>

      <div className="d-flex m-5 justify-content-between align-items-center">
      <h2 style={{"fontWeight":"600","fontSize": "30px"}}>RECENT POSTS</h2>
      <h2 style={{"fontWeight":"400","fontSize": "20px"}}>See all</h2>
      </div>
      <div className="d-flex" style={{"justifyContent":"flex-start","gap":"72px","margin":"55px"}}>
        <DesignCard/>
        <DesignCard/>       
        <DesignCard/>       
      </div>
    </>
  )
}

export default ContestGallery
