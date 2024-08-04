import React,{useEffect, useState} from 'react'
import contest from '../../assets/image/contest.jpg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ContestPage = () => {
    
    const id = window.location.pathname.split('/')[2]

    const [data,setData] = useState([])

    const navigate = useNavigate();
    const handleClick =()=>{
        navigate(`/contest-terms/${id}`)
    }

    function handleGallery(){
        navigate('/gallery')
    }

    const host = 'http://localhost:5000/api/v1'

    const getContestInfo = async () => {
        try {
            const response = await axios.get(`${host}/contest/getContestById/${id}`)

            if (response.data.data) {
                setData(response.data.data)
            }
        } catch (error) {
            alert(error.message)
        }
    } 

    useEffect(() => {
        getContestInfo()
    }, [])
    
    return (
        <>
            <div>
                <img className="" src={data.image} style={{ "height": "42vh", "width": "98vw" ,"objectFit":"cover"}} />
            </div>
            <div className="d-flex m-5 text-start" style={{"gap":"76px"}}>
                <div className="" style={{"width":"102vw"}}>
                    <p className="fs-3 fw-bold">{data.title}</p>
                    <p className="my-5 fw-semibold">{data.description}</p>
                    <button className="" style={{ "backgroundColor": "#4BF370", "color": "black" }} onClick={handleClick}>Register Now</button>
                </div>
                <div className="px-3 py-4 w-50" style={{ "backgroundColor": "#BFBABA", "borderRadius": "3%" }}>
                    <span className="py-2 px-3 fw-bold" style={{ "backgroundColor": "#0400CA", "color": "#12E70E", "borderRadius": "12px" }}>{data.daysLeft} days to deadline</span>
                    <p className="my-3 fw-bold">Deadline</p>
                    <p className="fw-normal">{data.deadline}</p>
                    <hr style={{ "color": "white", "fontWeight": "100" }} />
                    <p className=" fw-bold">{data.participants} participants registered</p>
                    <p className="fw-normal" style={{"cursor":"pointer"}} onClick={handleGallery}>View Gallery</p>
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
                <p className="fw-bolder " style={{ "color": "#403D3D" }}>1st -  ${data.prize}
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
