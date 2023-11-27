import React from 'react'
import './Home.css'

// imported images
import homeImage from '../../Assets/homeImage.jpg'

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
        <img src={homeImage} alt="home Image" />
        </div>   
      </div>
    </div>
  )
}

export default Home