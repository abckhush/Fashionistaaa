import React,{useEffect, useState} from 'react'
import DesignCard from './DesignCard'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const host = 'http://localhost:5000/api/v1'

    const navigate = useNavigate()
    const [current , setCurrent] = useState('artists you follow')

    
    const onClickArtist =()=>{
        setCurrent('artists you follow')
    }
    const onClickTrending =()=>{
        setCurrent('#trending now')
    }
    const onClickRecent =()=>{
        setCurrent('recent design posted')
    }
    const onClickPosts =()=>{
        setCurrent('see your posts')
    }

    
    const handleClick = () =>{
        console.log('clicked')
        navigate('/designInfo')
    }

    const [designs,setDesigns] = useState([])

    

    const getTrendingDesigns = async()=>{

    }

    const getRecentDesigns = async()=>{

    }

    const getYourDesigns = async()=>{

    }

    const getAllDesigns = async() =>{
      try {
        const response = await axios.get(`${host}/design/getAllDesigns`)
       

        if(response.data.success){
         setDesigns(response.data.data)
        }

      } catch (error) {
        
      }
    }

    if(current === 'artists you follow'){
      useEffect(()=>{
        getAllDesigns()
      },[])
    }
    if(current === '#trending now'){
      getTrendingDesigns()
    }
    if(current === 'recent design posted'){
      getRecentDesigns()
    }
    if(current === 'see your posts'){
      getYourDesigns()
    }
  return (
    <>
    <div className="d-flex justify-content-evenly my-4">
      <button onClick={onClickArtist} className={current === 'artists you follow' ? 'clicked' : 'unclicked'}>artists you follow</button>
      <button onClick={onClickTrending} className={current === '#trending now' ? 'clicked' : 'unclicked'}>#trending now</button>
      <button onClick={onClickRecent} className={current === 'recent design posted' ? 'clicked' : 'unclicked'}>recent design posted</button>
      <button onClick={onClickPosts} className={current === 'see your posts' ? 'clicked' : 'unclicked'}>see your posts</button>
    </div>

      <div className="d-flex flex-wrap align-items-center justify-content-evenly gap-5 my-5">
        {designs.map((design,index)=>{
          return <DesignCard key={index} design={design} onClick={handleClick}/>
        })}
      </div>

      
    </>
  )
}

export default Home
