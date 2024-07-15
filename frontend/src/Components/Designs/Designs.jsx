import React ,{useState} from 'react'
import search from '../../assets/svg/search.svg'
import star from '../../assets/svg/star.svg'
import design1 from "../../assets/image/1.jpeg"
import design2 from "../../assets/image/2.jpeg"
import design3 from "../../assets/image/3.png"
import design4 from "../../assets/image/4.jpeg"
import design5 from "../../assets/image/5.jpeg"
import design6 from "../../assets/image/6.jpeg"
import design7 from "../../assets/image/7.png"
import design8 from "../../assets/image/8.jpeg"
import design9 from "../../assets/image/9.jpeg"
import design10 from "../../assets/image/10.jpeg"
import design11 from "../../assets/image/11.jpeg"
import design12 from "../../assets/image/12.jpeg"
import design13 from "../../assets/image/13.png"
import design14 from "../../assets/image/14.png"
import design15 from "../../assets/image/15.png"
import design16 from "../../assets/image/16.png"

const Designs = () => {
  const [prompt,setPrompt] = useState('')
  const [designs,setDesigns] = useState([])
  const handleChange = (e)=>{
    setPrompt(e.target.value)
  }
  const generateDesign = ()=>{
    console.log(prompt)
  }

  return (
    <>
      <div className=" my-auto py-auto" >
            <div className=" text-center m-auto py-5" >
                <p className='fs-1 fw-bolder'>Unleash Your <span className="" style={{"fontWeight":"800","background":" -webkit-linear-gradient(#0095ff, #ff00dc)","-webkit-background-clip":" text","-webkit-text-fill-color":" transparent","fontFamily": "Playfair Display", }}>Gen Z Fashion</span> Creativity with AI</p>
                <p className="fs-5 w-75 mx-auto py-3 mb-5">Step into the future of fashion with our AI-powered clothing design tool. Whether you’re a trendsetter or just love to experiment with styles, our platform empowers you to create unique, personalized clothing designs effortlessly.
                </p>
                <div style={{"width":"57vw"}} class="input-group input-group-lg  mx-auto my-2">
                    <input onChange={handleChange} type="text" class="fw-bold p-3 form-control" placeholder="Write your prompt to generate image...." />

                    <button onClick={generateDesign} class="btn btn-primary text-white" type="button" style={{    "backgroundImage": "linear-gradient(to right, #6c79f1, #f30b92)",
                     
                    }}>
                      <img className="" src={star} />
                     Generate</button>
                </div>


            </div>

            <div className="grid gap-5 ">
              <img className="w-25 g-col-4 g-col-md-4  rounded" src={design1} />
              <img className="w-25 g-col-4 g-col-md-4  rounded" src={design2} />
              <img className="w-25 g-col-4 g-col-md-4  rounded" src={design3} />
              <img className="w-25 g-col-4 g-col-md-4  rounded" src={design4} />
              <img className="w-25 g-col-4 g-col-md-4  rounded" src={design5} />
              <img className="w-25 g-col-4 g-col-md-4  rounded" src={design6} />
              <img className="w-25 g-col-4 g-col-md-4  rounded" src={design7} />
              <img className="w-25 g-col-4 g-col-md-4  rounded" src={design8} />
              <img className="w-25 g-col-4 g-col-md-4  rounded" src={design9} />
              <img className="w-25 g-col-4 g-col-md-4  rounded" src={design10} />
              <img className="w-25 g-col-4 g-col-md-4  rounded" src={design11} />
              <img className="w-25 g-col-4 g-col-md-4  rounded" src={design12} />
              <img className="w-25 g-col-4 g-col-md-4  rounded" src={design13} />
              <img className="w-25 g-col-4 g-col-md-4  rounded" src={design14} />
              <img className="w-25 g-col-4 g-col-md-4  rounded" src={design15} />
              <img className="w-25 g-col-4 g-col-md-4  rounded" src={design16} />
            </div>
      </div>
      <div className="text-start m-5">
        <p className="fw-bolder fs-2 ">How to Craft the Perfect Design Prompt</p>
        <p className="fs-5">Creating your ideal outfit is easy with our AI tool. Follow these tips to write a prompt that will help our AI generate the perfect design for you</p>
        <p className="fs-3 fw-medium my-3 ">Be Specific <p className="my-3 fw-normal fs-5"> Include details about the style, colors, patterns, and fabrics you want. For example, "I want a bohemian-style maxi dress with floral patterns and earth tones."</p></p>
        <p className="fs-3 fw-medium my-3 ">Use Keywords <p className="my-3 fw-normal fs-5"> Include keywords that describe the look you're going for, such as "vintage," "modern," "edgy," or "romantic."</p></p>
        <p className="fs-3 fw-medium my-3 ">Mention the Occasion <p className="my-3 fw-normal fs-5"> Indicate where you plan to wear the outfit. This helps the AI suggest appropriate designs. For instance, "A chic cocktail dress for an evening event."</p></p>
        <p className="fs-3 fw-medium my-3 ">Highlight Key Features <p className="my-3 fw-normal fs-5"> Specify any unique elements you want, such as "off-shoulder sleeves," "high-low hemline," or "vintage buttons."</p></p>
      </div>
      <div className="text-start m-5">
        <p className="fw-bolder fs-2">Examples</p>
        <div className="rounded text-white bg-dark my-3 fs-5 fw-bold  p-4">"Create a summer outfit featuring a flowy sundress with a tropical print and vibrant colors like teal and coral."</div>
        <div className="rounded  text-white bg-dark my-3 fs-5 fw-bold p-4">"Design a casual-chic look with a white button-down shirt, high-waisted jeans, and a statement belt."</div>
        <div className="rounded text-white bg-dark my-3 fs-5 fw-bold  p-4">"Generate a boho-inspired outfit with a peasant blouse, denim cutoffs, and a fringe bag."</div>
        <div className="rounded  text-white bg-dark my-3 fs-5 fw-bold p-4">"Craft a formal ensemble with a black tuxedo jacket, tailored trousers, and a silk bow tie."</div>
      </div>
    </>
  )
}

export default Designs
