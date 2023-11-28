import React, {useEffect} from 'react'
import './Sellers.css'

import toyota from '../../Assets/toyota.png'
import MercedesBenz from '../../Assets/MercedesBenz.png'
import Volkswagen from '../../Assets/Volkswagen.png'
import Hyundai from '../../Assets/Hyundai.png'

 // import Aos for animation and scroll reveal
 import Aos from 'aos'
 import 'aos/dist/aos.css'

const Sellers = () => {

   // Initialise Aos and set the default animation duration
   useEffect(()=>{
    Aos.init(
      {
        duration: 2000
      }
    )
  }, [])

  return (
    <div className='sellers section'>
        <div className="secContainer container">
          <div data-aos='fade-up' className="secHeading grid">
            <h3 className="secTitle">
              Explore sellers in town
            </h3>

            <p>Hit the Road with Peter, the Mastermind Behind the Town's Top Car Dealership, to Explore Local Sellers in Town!</p>
          </div>

          <div className="sellersContainer grid">
          {/* Single seller */}
          <div data-aos='fade-up' className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={toyota} alt="" className='img'/>
            </div>
            <span className="info">
              <h4 className="name">
                Toyota
              </h4>
              <p>from ksh 2M</p>
            </span>
          </div>

          {/* Single seller */}
          <div data-aos='fade-up' className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={MercedesBenz} alt="" className='img'/>
            </div>
            <span className="info">
              <h4 className="name">
              Mercedes Benz
              </h4>
              <p>from ksh 2M</p>
            </span>
          </div>

          {/* Single seller */}
          <div data-aos='fade-up' className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={Volkswagen} alt="" className='img'/>
            </div>
            <span className="info">
              <h4 className="name">
                Volkswagen
              </h4>
              <p>from ksh 2M</p>
            </span>
          </div>

          {/* Single seller */}
          <div data-aos='fade-up' className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={Hyundai} alt="" className='img'/>
            </div>
            <span className="info">
              <h4 className="name">
                Hyundai
              </h4>
              <p>from ksh 2M</p>
            </span>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Sellers