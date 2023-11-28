import React, {useEffect} from 'react'
import './Home.css'

// imported images
import homeImage from '../../Assets/homeImage.jpg'

// import Aos for animation and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  // Initialise Aos and set the default animation duration
  useEffect(()=>{
    Aos.init(
      {
        duration: 2000
      }
    )
  }, [])
  
  return (
    <div className='home'>
      <div className="secContainer">

         <div data-aos='fade-up' className="homeText">
          <span className="homeSpan">
          Find Your Dream Ride
          </span>
          <h1 className="homeTitle">
          Explore Our Car Listings
          </h1>
          <div className="btn flex">
            <button data-aos='fade-right' className="btn">More Details</button>
            <button data-aos='fade-left'className="btn primaryBtn">Test Drive</button>
          </div>
          </div>

       <div data-aos='fade-down-right'className="homeImage">
        <img src={homeImage} alt="home Image" />
        </div>   
      </div>
    </div>
  )
}

export default Home