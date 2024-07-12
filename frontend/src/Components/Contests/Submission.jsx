import React from 'react'
import contest from '../../assets/image/contest.jpg'

const Submission = () => {
  const handleClick = () => {
    alert("Design Submitted Successfully")
  }
  return (
    <>
      <div>
        <img className="" src={contest} style={{ "height": "42vh", "width": "98vw","objectFit":"cover" }} />
      </div>

      <p className="fs-3 my-3 fw-bold">Xnova Contest Submission</p>
      <div className="w-50 m-auto p-3 text-start my-5" style={{"backgroundColor":"rgb(248 249 250)"}}>
        <div class="mb-5">
          <label for="exampleFormControlInput1" class="form-label fs-5 fw-bold">Add Title</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ex. Elegant Evening Gown in Royal Blue...." />
        </div>
        <div class="mb-5">
          <label for="exampleFormControlTextarea1" class="form-label fs-5 fw-bold">Add description</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{"height":"17vh"}} placeholder="Ex. This elegant evening gown features a sophisticated royal blue hue, meticulously crafted by our AI to enhance the wearer's grace and poise."></textarea>
        </div>
        <div class="mb-5">
          <label for="exampleFormControlInput1" class="form-label fs-5 fw-bold">Add Tags</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ex. Evening Gown, Royal Blue, Elegant, AI Design" />
        
        </div>
        <div class="mb-5">
          <label for="formFileMultiple" class="form-label fs-5 fw-bold">Add your designs</label>
          <input class="form-control" type="file" id="formFileMultiple" multiple />
        </div>
        <div className="text-center">
        <button className="" style={{ "backgroundColor": "#4BF370", "color": "black" }} onClick={handleClick} >Submit Design</button>
        </div>

      </div>
    </>
  )
}

export default Submission
