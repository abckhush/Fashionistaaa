import React from 'react'
import contest from '../../assets/image/contest.jpg'
import { useNavigate } from 'react-router-dom'

const ContestPage = () => {
    const navigate = useNavigate();
    const handleClick =()=>{
        navigate('/contest-terms')
    }
    return (
        <>
            <div>
                <img className="" src={contest} style={{ "height": "80vh", "width": "98vw" }} />
            </div>
            <div className="d-flex m-5 text-start">
                <div className="">
                    <p className="fs-3 fw-bold">Xnova Contest</p>
                    <p className="my-5 fw-semibold">Unleash Your Creativity with AI. Whether you’re a fashion enthusiast, a designer, or simply someone who loves to experiment with style, this is your chance to showcase your unique creations.</p>
                    <button className="" style={{ "backgroundColor": "#4BF370", "color": "black" }} onClick={handleClick}>Register Now</button>
                </div>
                <div className="px-3 py-4 w-50" style={{ "backgroundColor": "#BFBABA", "borderRadius": "3%" }}>
                    <span className="py-2 px-3 fw-bold" style={{ "backgroundColor": "#0400CA", "color": "#12E70E", "borderRadius": "12px" }}>2 days to deadline</span>
                    <p className="my-3 fw-bold">Deadline</p>
                    <p className="fw-normal">17 July,2024  08:00 p.m. (I.S.T)</p>
                    <hr style={{ "color": "white", "fontWeight": "100" }} />
                    <p className=" fw-bold">20 participants registered</p>
                    <p className="fw-normal">View Schedule</p>
                </div>
            </div>

            <p className="text-start fw-bold fs-4 m-5">How to participate</p>

            <div className="text-start m-5">
                <p className="fw-bolder " style={{ "color": "#403D3D" }}>1. Generate your designs</p>
                <p className="fw-normal"> Use our AI tool to create unique dress designs.</p>
            </div>

            <div className="text-start m-5">
                <p className="fw-bolder " style={{ "color": "#403D3D" }}>2. Submit Your Design:</p>
                <p className="fw-normal">Enter your design through our submission form.</p>
            </div>


            <div className="text-start m-5">
                <p className="fw-bolder " style={{ "color": "#403D3D" }}>3. Share and Vote</p>
                <p className="fw-normal">Share your design on social media with #AIFashionContest and gather votes.</p>
            </div>

            <p className="text-start fw-bold fs-4 m-5">How to participate</p>
            <div className="text-start m-5">
                <p className="fw-bolder " style={{ "color": "#403D3D" }}>1. All designs must be created using our AI tool.
                </p>
                <p className="fw-bolder " style={{ "color": "#403D3D" }}>2. Submissions should include a description and be shared on social media with the contest hashtag.
                </p>
                <p className="fw-bolder " style={{ "color": "#403D3D" }}>3. The contest is open to individuals of all ages and skill levels.
                </p>

            </div>

            <p className="text-start fw-bold fs-4 m-5">Prizes</p>
            <div className="text-start m-5">
                <p className="fw-bolder " style={{ "color": "#403D3D" }}>1st -  $45,000
                </p>
                <p className="fw-bolder " style={{ "color": "#403D3D" }}>2nd - $25,000
                </p>
                <p className="fw-bolder " style={{ "color": "#403D3D" }}>3rd - $15,000
                </p>

            </div>

        </>

    )
}

export default ContestPage
