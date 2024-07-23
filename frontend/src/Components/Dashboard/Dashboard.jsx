import React, { useEffect, useState } from 'react'
import avatar from '../../assets/image/avatar.jpg'
import Post from './Post'
import axios from 'axios'
import error from '../../assets/svg/empty.svg'
import FAQ from './FAQ.jsx'

const Dashboard = () => {
  const host = "http://localhost:5000/api/v1";
  const [click, setClick] = useState("designs")
  const getProfile = async (req, res) => {
    try {
      const response = await axios.get(`${host}/user/profile`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })

      if (response.data.success) {
        console.log(response.data)
      }
      else {
        alert(response.data.message)
      }
    } catch (err) {
      alert(err.message)
    }
  }
  useEffect(() => {
    getProfile()
  }, [])

  const handleProfileInfoClick = () => {
    setClick("profile")
  }
  const handleDesignsClick = () => {
    setClick("designs")
  }
  const handleSavedDesignsClick = () => {
    setClick("savedDesigns")
  }
  const handleSettingsClick = () => {
    setClick("settings")
  }

  const handleDelete = async() =>{
    try {
      const response = await axios.delete(`${host}/user/deleteAccount`, { headers
      : { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })

      if (response.data.success) {
        alert(response.data.message)
        sessionStorage.removeItem('token')
        window.location.href = "/login"
      }
      else {
        alert(response.data.message)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  function handleLogout(){
    sessionStorage.removeItem('token')
    window.location.href = "/login"
  }

  
  return (
    <div className='' style={{ "backgroundColor": "#D9D9D9" }}>
      <div className="d-flex p-5 justify-content-start gap-5 align-items-center">
        <img className="rounded-circle" src={avatar} style={{ "height": "31vh" }} />
        <div className="">
          <h1 className="fw-bold">Welcome, <span style={{ "color": "#22C5E9" }}>USER</span></h1>
          <div className="d-flex p-3 justify-content-start gap-5 align-items-center">
          <p type="button"className="text-dark fs-3 fw-light" style={{"cursor":"pointer","backgroundColor":"#D9D9D9"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
          32k followers
</p>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Followers list</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <p className="fs-3 fw-light" style={{"cursor":"pointer"}} >32 followers</p>
      </div>
      <p className="mx-5 d-flex justify-content-start align-items-center gap-3">
        <img className="rounded-circle" style={{"height":"8vh"}} src={avatar} />
        <span className="fs-5 fw-normal">Ayushi</span>
      </p>
      <p className="mx-5 d-flex justify-content-start align-items-center gap-3">
        <img className="rounded-circle" style={{"height":"8vh"}} src={avatar} />
        <span className="fs-5 fw-normal">draco</span>
      </p>
      <p className="mx-5 d-flex justify-content-start align-items-center gap-3">
        <img className="rounded-circle" style={{"height":"8vh"}} src={avatar} />
        <span className="fs-5 fw-normal">Hermionie</span>
      </p>
      <p className="mx-5 d-flex justify-content-start align-items-center gap-3">
        <img className="rounded-circle" style={{"height":"8vh"}} src={avatar} />
        <span className="fs-5 fw-normal">Ron</span>
      </p>
      <p className="mx-5 d-flex justify-content-start align-items-center gap-3">
        <img className="rounded-circle" style={{"height":"8vh"}} src={avatar} />
        <span className="fs-5 fw-normal">Harry</span>
      </p>

     
    </div>
  </div>
</div>
<p type="button"className="text-dark fs-3 fw-light" style={{"cursor":"pointer","backgroundColor":"#D9D9D9"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
          32 following
</p>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Followers list</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <p className="fs-3 fw-light" style={{"cursor":"pointer"}} >32 followers</p>
      </div>
      <p className="mx-5 d-flex justify-content-start align-items-center gap-3">
        <img className="rounded-circle" style={{"height":"8vh"}} src={avatar} />
        <span className="fs-5 fw-normal">Ayushi</span>
      </p>
      <p className="mx-5 d-flex justify-content-start align-items-center gap-3">
        <img className="rounded-circle" style={{"height":"8vh"}} src={avatar} />
        <span className="fs-5 fw-normal">draco</span>
      </p>
      <p className="mx-5 d-flex justify-content-start align-items-center gap-3">
        <img className="rounded-circle" style={{"height":"8vh"}} src={avatar} />
        <span className="fs-5 fw-normal">Hermionie</span>
      </p>
      <p className="mx-5 d-flex justify-content-start align-items-center gap-3">
        <img className="rounded-circle" style={{"height":"8vh"}} src={avatar} />
        <span className="fs-5 fw-normal">Ron</span>
      </p>
      <p className="mx-5 d-flex justify-content-start align-items-center gap-3">
        <img className="rounded-circle" style={{"height":"8vh"}} src={avatar} />
        <span className="fs-5 fw-normal">Harry</span>
      </p>

     
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
      <div className="d-flex fs-5 p-3 justify-content-evenly gap-5 align-items-center" style={{ "background": "#807F7F", "color": "white" }}>
        <span className="py-2 px-3 rounded" onClick={handleDesignsClick} style={click==="designs" ? {background:"black","cursor": "pointer"}:{"cursor": "pointer"}}>Your Designs</span>
        <span className="py-2 px-3 rounded" onClick={handleSavedDesignsClick} style={click==="savedDesigns" ? {background:"black","cursor": "pointer"}:{"cursor": "pointer"}} >Saved Designs</span>
        <span className="py-2 px-3 rounded" onClick={handleProfileInfoClick} style={click==="profile" ? {background:"black","cursor": "pointer"}:{"cursor": "pointer"}} >Personal Info</span>
        <span className="py-2 px-3 rounded" onClick={handleSettingsClick} style={click==="settings" ? {background:"black","cursor": "pointer"}:{"cursor": "pointer"}} >Settings</span>
      </div>
      {
        click === "profile" ? <>
        <div className="text-center p-5 bg-white">
          <p className="fw-bold fs-3 mb-5">Profile Details</p>
          <div className="d-flex justify-content-between mx-auto my-3  align-items-center" style={{"width":"28vw"}}>
            <p className="fs-4 fw-normal">Name</p>
            <p className="fs-4 fw-normal">User</p>
          </div>
          <div className="d-flex justify-content-between mx-auto my-3  align-items-center" style={{"width":"28vw"}}>
            <p className="fs-4 fw-normal">Username</p>
            <p className="fs-4 fw-normal">username</p>
          </div>
          <div className="d-flex justify-content-between mx-auto my-3  align-items-center" style={{"width":"28vw"}}>
            <p className="fs-4 fw-normal">Email</p>
            <p className="fs-4 fw-normal">email</p>
          </div>
          <div className="d-flex justify-content-between mx-auto my-3  align-items-center" style={{"width":"28vw"}}>
            <p className="fs-4 fw-normal">Gender</p>
            <p className="fs-4 fw-normal">Not added</p>
          </div>
          <div className="d-flex justify-content-between mx-auto my-3  align-items-center" style={{"width":"28vw"}}>
            <p className="fs-4 fw-normal">Date Of Birth</p>
            <p className="fs-4 fw-normal">Not Added</p>
          </div>
          <div className="d-flex justify-content-between mx-auto my-3  align-items-center" style={{"width":"28vw"}}>
            <p className="fs-4 fw-normal">Location</p>
            <p className="fs-4 fw-normal">Not Added</p>
          </div>
          <button className="btn bg-dark text-light my-4 fs-4 py-1 px-3 ">Edit Profile</button>
        </div>
        
        </> : click === "designs" ? <><div className="d-flex  justify-content-between flex-wrap  align-items-center " style={{ "gap": "29px", "padding": "50px" }}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div></> : click === "savedDesigns" ? <>
      <div className="bg-white">
        <img className="" style={{height:"78vh"}} src={error} />
        <p className="fw-normal fs-3">You haven't saved any designs yet!</p>
      </div>
      </> : click === "settings" ? <>
      <div className="d-flex gap-5 p-5">
      <div className="text-start " style={{"width":"38vw"}}>
        <p className="py-1 px-3 fs-5" style={{"border":"1px solid","cursor":"pointer","borderRadius":"5px"}}>My Liked Designs</p>
        <p className="py-1 px-3 fs-5" style={{"border":"1px solid","cursor":"pointer","borderRadius":"5px"}}>My Comments</p>
        <p className="py-1 px-3 fs-5" style={{"border":"1px solid","cursor":"pointer","borderRadius":"5px"}}>My Contests</p>
        <p className="py-1 px-3 fs-5" style={{"border":"1px solid","cursor":"pointer","borderRadius":"5px"}}>Change Avatar</p>
        <p className="py-1 px-3 fs-5" style={{"border":"1px solid","cursor":"pointer","borderRadius":"5px"}}>Notifications</p>
        <p className="py-1 px-3 fs-5" style={{"border":"1px solid","cursor":"pointer","borderRadius":"5px"}} onClick={handleLogout}>Logout</p>
        <p className="py-1 px-3 fs-5" style={{"border":"1px solid","cursor":"pointer","borderRadius":"5px"}} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal3">Delete Account</p>
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel3">Are you sure you want to delete your account?</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <p className="fs-5 fw-light" style={{"cursor":"pointer"}} >Note that this process is irreversible and will lead to deletion of all your activity.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
        <button type="button" class="btn btn-primary" onClick={handleDelete}>Yes</button>
      </div>
      


     
    </div>
  </div>
</div>
        
      </div>
      <div className="text-start">
        <p className="fw-bold fs-4">FAQs</p>
        <FAQ/>
      </div>
      </div>
      </> : <></>
      }
      
    </div>
  )
}

export default Dashboard
