import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import chic from '../../assets/image/chic.png';
import classic from '../../assets/image/classic.png';
import minimalist from '../../assets/image/minimalist.png';
import sporty from '../../assets/image/sporty.png';
import vintage from '../../assets/image/vintage.png';
import modern from '../../assets/image/modern.png';
import business from '../../assets/image/business.png';
import party from '../../assets/image/party.png';
import wedding from '../../assets/image/wedding.png';
import formal from '../../assets/image/formal.png';
import casual from '../../assets/image/casual.png';
import other from '../../assets/image/other.png';
import OPENAI from 'openai';

const InputColorGenerator = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        skintone: '',
        haircolor: '',
        style: '',
        occasion: '',
        height: '',
        weight: ''
    });

    // const openai = new OPENAI(apiKey: process.env.OPENAI_API_KEY,);


    


    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSkinToneClick = (tone) => {
        setCredentials({ ...credentials, skintone: tone });
    };

    const handleHairColorClick = (color) => {
        setCredentials({ ...credentials, haircolor: color });
    };

    const handleStyleClick = (style) => {
        setCredentials({ ...credentials, style: style });
    };

    const handleOccasionClick = (occasion) => {
        setCredentials({ ...credentials, occasion: occasion });
    };

    const generateDressColorPrompt = (credentials) => {
      return `
          Generate a dress color suggestion based on the following user preferences:
          - Skin tone: ${credentials.skintone}
          - Hair color: ${credentials.haircolor}
          - Style preference: ${credentials.style}
          - Occasion: ${credentials.occasion}
          - Height: ${credentials.height} cm
          - Weight: ${credentials.weight} kg
      `;
  };
  

    const handleClick = async(e) => {
        e.preventDefault();
        const prompt =generateDressColorPrompt(credentials);
       
        navigate('/output');

    };

    return (
        <div className='my-5 text-start w-75' style={{ margin: '52px auto' }}>
            <h2 style={{ fontWeight: '600', fontSize: '30px' }}>Tell us about your preferences</h2>
            <form onSubmit={handleClick} className=''>
                <div className="form-group my-3">
                    <label htmlFor="skintone" className="form-label fs-3 fw-light my-5">Select your skin tone</label>
                    <div className='input-form d-flex justify-content-start align-items-center gap-5 m-auto w-100'>
                        {[
                            { tone: 'Light', color: '#FEDAC2' },
                            { tone: 'Light Medium', color: '#F0BC98' },
                            { tone: 'Medium', color: '#E8A06C' },
                            { tone: 'Medium Tan', color: '#D87D43' },
                            { tone: 'Medium Deep', color: '#B95725' },
                            { tone: 'Deep', color: '#772D19' }
                        ].map(({ tone, color }) => (
                            <div key={tone} className={`input-grp d-flex flex-column justify-content-center align-items-center gap-3 ${credentials.skintone === tone ? 'selected' : ''}`}>
                                <div className="color-input" onClick={() => handleSkinToneClick(tone)} style={{ background: color }}></div>
                                <label className="labels">{tone}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="form-group my-3">
                    <label htmlFor="haircolor" className="form-label fs-3 fw-light my-5">Select your hair color</label>
                    <div className='input-form d-flex justify-content-start align-items-center gap-5 m-auto w-100'>
                        {[
                            { color: 'Blonde', code: '#F1CC8F' },
                            { color: 'Brown', code: '#883C07' },
                            { color: 'Black', code: '#0F0F0F' },
                            { color: 'Red', code: '#DC0000' },
                            { color: 'Gray', code: '#A5A19F' },
                            { color: 'Other', code: '#772D19' }
                        ].map(({ color, code }) => (
                            <div key={color} className={`input-grp d-flex flex-column justify-content-center align-items-center gap-3 ${credentials.haircolor === color ? 'selected' : ''}`}>
                                <div className="color-input" onClick={() => handleHairColorClick(color)} style={{ background: code }}></div>
                                <label className="labels">{color}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="form-group my-3">
                    <label htmlFor="style" className="form-label fs-3 fw-light my-5">What's your style preferences?</label>
                    <div className='input-form d-flex justify-content-start align-items-center gap-5 m-auto w-100'>
                        {[
                            { style: 'Modern', image: modern },
                            { style: 'Classic', image: classic },
                            { style: 'Chic', image: chic },
                            { style: 'Minimalist', image: minimalist },
                            { style: 'Sporty', image: sporty },
                            { style: 'Vintage', image: vintage }
                        ].map(({ style, image }) => (
                            <div key={style} className={`input-grp d-flex flex-column justify-content-center align-items-center gap-3 ${credentials.style === style ? 'selected' : ''}`} onClick={() => handleStyleClick(style)}>
                                <img className="" style={{ height: '15vh' }} src={image} alt={style}></img>
                                <label className="labels">{style}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="form-group my-3">
                    <label htmlFor="occasion" className="form-label fs-3 fw-light my-5">What's the occasion?</label>
                    <div className='input-form d-flex justify-content-start align-items-center gap-5 m-auto w-100'>
                        {[
                            { occasion: 'Casual', image: casual },
                            { occasion: 'Formal', image: formal },
                            { occasion: 'Party', image: party },
                            { occasion: 'Wedding', image: wedding },
                            { occasion: 'Business', image: business },
                            { occasion: 'Other', image: other }
                        ].map(({ occasion, image }) => (
                            <div key={occasion} className={`input-grp d-flex flex-column justify-content-center align-items-center gap-3 ${credentials.occasion === occasion ? 'selected' : ''}`} onClick={() => handleOccasionClick(occasion)}>
                                <img className="" style={{ height: '15vh' }} src={image} alt={occasion}></img>
                                <label className="labels">{occasion}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="form-group my-3">
                    <label htmlFor="height" className="form-label fs-3 fw-light my-5">Please enter your height (cm)</label>
                    <input type="number" className="form-control fs-5 w-25 shadow-none" id="height" name="height" placeholder="Enter your height" onChange={onChange} />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="weight" className="form-label fs-3 fw-light my-5">Please enter your weight (kg)</label>
                    <input type="number" className="form-control fs-5 w-25 shadow-none" id="weight" name="weight" placeholder="Enter your weight" onChange={onChange} />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn bg-dark text-light my-4 fs-4 p-2 text-center">Generate Dress Color</button>
                </div>
            </form>
        </div>
    );
};

export default InputColorGenerator;
