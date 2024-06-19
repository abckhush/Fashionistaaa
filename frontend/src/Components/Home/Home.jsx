import React from 'react'
import DesignCard from './DesignCard'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const [current , setCurrent] = useState(null)
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
  return (
    <>
    <div className="d-flex justify-content-evenly my-4">
      <button onClick={onClickArtist} className={current === 'artists you follow' ? 'clicked' : 'unclicked'}>artists you follow</button>
      <button onClick={onClickTrending} className={current === '#trending now' ? 'clicked' : 'unclicked'}>#trending now</button>
      <button onClick={onClickRecent} className={current === 'recent design posted' ? 'clicked' : 'unclicked'}>recent design posted</button>
      <button onClick={onClickPosts} className={current === 'see your posts' ? 'clicked' : 'unclicked'}>see your posts</button>
    </div>

      <div className="d-flex flex-wrap align-items-center justify-content-evenly gap-5 my-5">
      <DesignCard onClick={handleClick}/>
      <DesignCard/>
      <DesignCard/>
      <DesignCard/>
      <DesignCard/>
      <DesignCard/>
      </div>

      
    </>
  )
}

export default Home
