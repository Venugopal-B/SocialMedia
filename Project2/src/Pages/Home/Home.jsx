import React from 'react'
import "./Home.scss";
import Stories from '../../components/Stories/Stories';
import Posts from '../../components/Posts/Posts';
import Share from "../../components/Share/Share"

const Home = () => {
  return (
    <div className="home">
     <Stories/>
     <Share/>
     <Posts/>
    
        
    </div>
  )
}

export default Home;