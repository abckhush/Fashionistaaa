import React from 'react'
import avatar from '../../assets/image/avatar.jpg'
import Post from './Post'

const Dashboard = () => {
  
  return (
    <div className='' style={{ "backgroundColor": "#D9D9D9" }}>
      <div className="d-flex p-5 justify-content-start gap-5 align-items-center">
        <img className="rounded" src={avatar} style={{ "height": "31vh" }} />
        <div className="">
          <h1 className="fw-bold">Welcome, <span style={{ "color": "#22C5E9" }}>USER</span></h1>
          <div className="d-flex p-3 justify-content-start gap-5 align-items-center">
            <p className="fs-3 fw-light">32k followers</p>
            <p className="fs-3 fw-light">32 following</p>
          </div>
        </div>
      </div>
      <div className="d-flex fs-5 p-3 justify-content-evenly gap-5 align-items-center" style={{ "background": "#807F7F", "color": "white" }}>
        <span className="py-2 px-3 rounded" style={{ "background": "black", "cursor": "pointer" }}>Your Designs</span>
        <span className="py-2 px-3 rounded" style={{ "cursor": "pointer" }}>Saved Designs</span>
        <span className="py-2 px-3 rounded" style={{ "cursor": "pointer" }}>Personal Info</span>
        <span className="py-2 px-3 rounded" style={{ "cursor": "pointer" }}>Settings</span>
      </div>

      <div className="d-flex  justify-content-between flex-wrap  align-items-center " style={{ "gap": "29px", "padding": "50px" }}>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
      </div>
    </div>
  )
}

export default Dashboard
