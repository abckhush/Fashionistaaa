import React from 'react'
import { useNavigate } from 'react-router-dom'
import chic from '../../assets/image/chic.png'
import classic from '../../assets/image/classic.png'
import minimalist from '../../assets/image/minimalist.png'
import sporty from '../../assets/image/sporty.png'
import vintage from '../../assets/image/vintage.png'
import modern from '../../assets/image/modern.png'
import business from '../../assets/image/business.png'
import party from '../../assets/image/party.png'
import wedding from '../../assets/image/wedding.png'
import formal from '../../assets/image/formal.png'
import casual from '../../assets/image/casual.png'
import other from '../../assets/image/other.png'

const InputColorGenerator = () => {
    const navigate = useNavigate()

    function onChange(){

    }

    const handleClick = () =>{}

  return (
   <div className='my-5 text-start w-75' style={{"margin":"52px auto"}}>
         <h2 style={{"fontWeight":"600","fontSize": "30px"}}>Tell us about your preferences</h2>
         <form action="" className=''>
                <div className="form-group my-3">
                    <label htmlFor="occasion" className="form-label fs-3 fw-light my-5">Select your skin tone</label>
                    <div  className='input-form d-flex justify-content-start align-items-center gap-5 m-auto w-100'>
             <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <div className="color-input" style={{'background':'#FEDAC2'}}></div>
              <label className="labels" htmlFor="price">Light</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <div className="color-input" style={{'background':'#F0BC98'}}></div>
              <label className="labels" htmlFor="price">Light Medium</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <div className="color-input" style={{'background':'#E8A06C'}}></div>
              <label className="labels" htmlFor="price">Medium</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <div className="color-input" style={{'background':'#D87D43'}}></div>
              <label className="labels" htmlFor="price">Medium Tan</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <div className="color-input" style={{'background':'#B95725'}}></div>
              <label className="labels" htmlFor="price">Medium Deep</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <div className="color-input" style={{'background':'#772D19'}}></div>
              <label className="labels" htmlFor="price">Deep</label>
            </div>
            
            
         
          </div>
                </div>
               
                <div className="form-group my-3">
                    <label htmlFor="occasion" className="form-label fs-3 fw-light my-5">Select your hair color</label>
                    <div  className='input-form d-flex justify-content-start align-items-center gap-5 m-auto w-100'>
             <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <div className="color-input" style={{'background':'#F1CC8F'}}></div>
              <label className="labels" htmlFor="price">Blonde</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <div className="color-input" style={{'background':'#883C07'}}></div>
              <label className="labels" htmlFor="price">Brown</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <div className="color-input" style={{'background':'#0F0F0F'}}></div>
              <label className="labels" htmlFor="price">Black</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <div className="color-input" style={{'background':'#DC0000'}}></div>
              <label className="labels" htmlFor="price">Red</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <div className="color-input" style={{'background':'#A5A19F'}}></div>
              <label className="labels" htmlFor="price">Gray</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <div className="color-input" style={{'background':'#772D19'}}></div>
              <label className="labels" htmlFor="price">Other</label>
            </div>
            
            
         
          </div>
                </div>

                <div className="form-group my-3">
                    <label htmlFor="occasion" className="form-label fs-3 fw-light my-5">What's your style preferences?</label>
                    <div  className='input-form d-flex justify-content-start align-items-center gap-5 m-auto w-100'>
             <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <img className="" style={{'height':'15vh'}}  src={modern}></img>
              <label className="labels" htmlFor="price">Modern</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <img className="" style={{'height':'15vh'}}  src={classic}></img>
              <label className="labels" htmlFor="price">Classic</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <img className="" style={{'height':'15vh'}}  src={chic}></img>
              <label className="labels" htmlFor="price">Chic</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <img className="" style={{'height':'15vh'}}  src={minimalist}></img>
              <label className="labels" htmlFor="price">Minimalist</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <img className="" style={{'height':'15vh'}}  src={sporty}></img>
              <label className="labels" htmlFor="price">Sporty</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <img className="" style={{'height':'15vh'}}  src={vintage}></img>
              <label className="labels" htmlFor="price">Vintage</label>
            </div>
            
            
         
          </div>
                </div>

                <div className="form-group my-3">
                    <label htmlFor="occasion" className="form-label fs-3 fw-light my-5">What's the occasion ?</label>
                    <div  className='input-form d-flex justify-content-start align-items-center gap-5 m-auto w-100'>
             <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <img className="" style={{'height':'15vh'}}  src={casual}></img>
              <label className="labels" htmlFor="price">Casual</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <img className="" style={{'height':'15vh'}}  src={formal}></img>
              <label className="labels" htmlFor="price">Formal</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <img className="" style={{'height':'15vh'}}  src={party}></img>
              <label className="labels" htmlFor="price">Party</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <img className="" style={{'height':'15vh'}}  src={wedding}></img>
              <label className="labels" htmlFor="price">Wedding</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <img className="" style={{'height':'15vh'}}  src={business}></img>
              <label className="labels" htmlFor="price">Business</label>
            </div>
            <div className="input-grp d-flex flex-column  justify-content-center align-items-center gap-3">
              <img className="" style={{'height':'15vh'}}  src={other}></img>
              <label className="labels" htmlFor="price">Other</label>
            </div>
            
            
         
          </div>
                </div>

                <div className="form-group my-3">
                    <label htmlFor="occasion" className="form-label fs-3 fw-light my-5">Please enter your height (cm)</label>
                    <input type="number" className="form-control fs-5 w-25  shadow-none" id="height" name="height" placeholder="Enter your height" onChange={onChange}/>
                </div>

                <div className="form-group my-3">
                    <label htmlFor="occasion" className="form-label fs-3 fw-light my-5">Please enter your weight (kg)</label>
                    <input type="number" className="form-control fs-5 w-25  shadow-none " id="weight" name="weight" placeholder="Enter your weight" onChange={onChange}/>
                </div>
                <div className="text-center">
                <button type="submit" className="btn bg-dark text-light my-4 fs-4 p-2 text-center " style={{}} onClick={handleClick}>Generate Dress Color</button>
                </div>
         </form>
    </div>
  )
}

export default InputColorGenerator
