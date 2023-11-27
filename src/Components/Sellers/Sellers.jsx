import React from 'react'
import './Sellers.css'

import toyota from '../../Assets/toyota.png'
import MercedesBenz from '../../Assets/MercedesBenz.png'
import Volkswagen from '../../Assets/Volkswagen.png'
import Hyundai from '../../Assets/Hyundai.png'

const Sellers = () => {
  return (
    <div className='sellers section'>
        <div className="secContainer container">
          <div className="secHeading grid">
            <h3 className="secTitle">
              Explore sellers in town
            </h3>

            <p>Hit the Road with Peter, the Mastermind Behind the Town's Top Car Dealership, to Explore Local Sellers in Town!</p>
          </div>

          <div className="sellersContainer">
          {/* Single seller */}
          <div className="singleSeller flex">
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
          <div className="singleSeller flex">
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
          <div className="singleSeller flex">
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
          <div className="singleSeller flex">
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