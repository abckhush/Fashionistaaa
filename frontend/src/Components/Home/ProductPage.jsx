import React from 'react'
import dress from '../../assets/image/design.jpeg'
import avatar from '../../assets/image/avatar.jpg'
import heart from '../../assets/svg/heart.svg'
import comment from '../../assets/svg/comment.svg'
import save from '../../assets/svg/saved.svg'
import download from '../../assets/svg/download.svg'
import flag from '../../assets/svg/flag.svg'
import success from '../../assets/svg/success.svg'
import clock from '../../assets/svg/clock.svg'
import { Link } from 'react-router-dom'

const ProductPage = () => {
  return (
    <>
     <div className="d-flex align-items-start justify-content-between p-3 gap-5">
        <img className="" src={dress} style={{"width":"40%"}} />
        <div className="text-start" style={{"width":"60%"}} >
            <div className="d-flex align-items-center justify-content-evenly p-3">
            <div className="hover-gray d-flex align-item-center justify-content-between gap-2  py-2 px-3 rounded border ">
                <img className="avatar" style={{"height":"4vh"}} src={heart} />
                <p className="m-0">Like</p>
            </div>
            <div className="hover-gray d-flex align-item-center justify-content-between gap-2  py-2 px-3 rounded border ">
                <img className="avatar" style={{"height":"4vh"}} src={comment} />
                <p className="m-0">Comment</p>
            </div>
            <div className="hover-gray d-flex align-item-center justify-content-between gap-2  py-2 px-3 rounded border ">
                <img className="avatar" style={{"height":"4vh"}} src={save} />
                <p className="m-0">Save</p>
            </div>
            <div className="hover-gray d-flex align-item-center justify-content-between gap-2  py-2 px-3 rounded border ">
                <img className="avatar" style={{"height":"4vh"}} src={download} />
                <p className="m-0">Download</p>
            </div>
            </div>
            <div className="fs-3 fw-bold my-3">Posted By</div>
            <div className="d-flex justify-content-between align-items-center my-3">
                <div className=" d-flex gap-2 align-items-center">
                <img className="avatar rounded-circle" src={avatar} style={{"height":"13vh"}}/>
                <div className="d-flex flex-column">
                <span className="fw-bold fs-4" style={{"color":"#776400"}}>XYZ</span>
                <span className="fw-bold fs-5">Follow</span>
                </div>
                </div>
            </div>
         <div className="my-5">
            <div className="d-flex align-items-center gap-3 my-3">
                <img className="avatar" style={{"height":"4vh"}} src={clock} />
                <span className='fs-5'>May 17th , 2024</span>
            </div>
            <div className="d-flex align-items-center gap-3 my-3">
                <img className="avatar" style={{"height":"4vh"}} src={success} />
                <span className='fs-5'>Free to use</span>
            </div>
            <div className="d-flex align-items-center gap-3 my-3">
                <img className="avatar" style={{"height":"4vh"}} src={flag} />
                <span className='fs-5'>Report</span>
            </div>
            </div>
            <div className="fw-bold my-4 fs-4">Like the designs? Explore more of the <Link to='/' className='fw-bold'>creator</Link></div>
        </div>
     </div>
     <p className="fs-1 fw-bold text-start m-3">Elegant Evening Gown in Royal Blue</p>
     <p className="fs-3 m-3 text-start">This elegant evening gown features a sophisticated royal blue hue, meticulously crafted by our AI to enhance the wearer's grace and poise.</p>
     <div className="d-flex gap-4 m-5">
        <div className="py-2 px-3 rounded text-light" style={{"backgroundColor":"#155FEF"}}>#trending</div>
        <div className="py-2 px-3 rounded text-light" style={{"backgroundColor":"#155FEF"}}>#contests</div>
        <div className="py-2 px-3 rounded text-light" style={{"backgroundColor":"#155FEF"}}>#gown</div>
        <div className="py-2 px-3 rounded text-light" style={{"backgroundColor":"#155FEF"}}>#myfirstdesign</div>
     </div>
     <div className="py-2" >
        <div className="d-flex align-item-center justify-content-center gap-4 my-5">
            <input type="text" className='w-50 p-3 rounded bg-light border-0 outline- text-dark' placeholder='Add a comment'/>
            <button>POST</button>
        </div>
        <div className="my-3 rounded w-75 m-auto bg-light p-3 d-flex align-items-center justify-content-start gap-3">
            <img className="avatar rounded-circle" src={avatar} />
            <span className="">Absolutely loved the design generated!</span>
        </div>

        <div className="my-3 rounded w-75 m-auto bg-light p-3 d-flex align-items-center justify-content-start gap-3">
            <img className="avatar rounded-circle" src={avatar} />
            <span className="">Absolutely loved the design generated!</span>
        </div>

        <div className="my-3 rounded w-75 m-auto bg-light p-3 d-flex align-items-center justify-content-start gap-3">
            <img className="avatar rounded-circle" src={avatar} />
            <span className="">Absolutely loved the design generated!</span>
        </div>

        <div className="my-3 rounded w-75 m-auto bg-light p-3 d-flex align-items-center justify-content-start gap-3">
            <img className="avatar rounded-circle" src={avatar} />
            <span className="">Absolutely loved the design generated!</span>
        </div>
     </div>
     <div className="my-4">
        <p className="fw-bold text-start fs-3 m-5">More Like This</p>
        <div className="d-flex  gap-5 m-5">
        <div className="py-2 px-3 rounded border fs-5 hover-black" >Gown</div>
        <div className="py-2 px-3 rounded border fs-5 hover-black" >Latest design</div>
        <div className="py-2 px-3 rounded border fs-5 hover-black" >Wedding Outfits</div>
        <div className="py-2 px-3 rounded border fs-5 hover-black" >Dresses</div>
        <div className="py-2 px-3 rounded border fs-5 hover-black" >Bodycon designs</div>
        <div className="py-2 px-3 rounded border fs-5 hover-black" >XYZ</div>
     </div>
     </div>
    </>
  )
}

export default ProductPage
