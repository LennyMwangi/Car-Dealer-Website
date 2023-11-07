import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="secContainer">

         <div className="homeText">
          <span className="homeSpan">
          Find Your Dream Ride
          </span>
          <h1 className="homeTitle">
          Explore Our Car Listings
          </h1>
          <div className="btn flex">
            <button className="btn">More Details</button>
            <button className="btn primaryBtn">Test Drive</button>
          </div>
          </div>

       <div className="homeImage">
        <img src="src/Assets/homeImage.jpg" alt="home Image" />
        </div>   
      </div>
    </div>
  )
}

export default Home