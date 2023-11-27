import React from 'react'
import './Auction.css'


import {BsArrowRightShort} from 'react-icons/bs'
import {BsArrowLeftShort} from 'react-icons/bs'

import car13 from '../../Assets/car13.jpg'
import car5 from '../../Assets/car5.jpg'
import car6 from '../../Assets/car6.jpg'
import car4 from '../../Assets/car4.jpg'
import car3 from '../../Assets/car3.jpg'
import car2 from '../../Assets/car2.jpg'
import car1 from '../../Assets/car1.jpg'

const Auction = () => {
  return (
    <div className='auction section'>
      <div className="secContainer container">
        <div className="secHeading flex">
        <h3 className="secTitle">
          Active Auctions
        </h3>

        <div className="navBtns flex">
          <BsArrowLeftShort className='icon leftIcon'/>
          <BsArrowRightShort className='icon rightIcon'/>
        </div>
        </div>

        <div className="carContainer grid">
          {/* Single Car Grid */}
          <div className="singleCar grid"> 
            <img src={car13} alt="Car Image" />
            <h5 className="carTitle">
            Used 2019 Audi s4 Premium Plus
          </h5>
          <span className="miles">
            11457 Miles
          </span>
          <span className="AWD">
            AWD 4-cylinder Turbo
          </span>

          <div className="price_buyBtn flex">
            <span className="price">
              ksh. 4,081,200
            </span>
              <span className="buyBtn">
                Buy Now
              </span>
          </div>
          </div>

           {/* Single Car Grid */}
           <div className="singleCar grid singleCarActive"> 
            <img src={car5} alt="Car Image" />
            <h5 className="carTitle">
            Used 2019 Audi s4 Premium Plus
          </h5>
          <span className="miles">
            11457 Miles
          </span>
          <span className="AWD">
            AWD 4-cylinder Turbo
          </span>

          <div className="price_buyBtn flex">
            <span className="price">
              ksh. 4,081,200
            </span>
              <span className="buyBtn">
                Buy Now
              </span>
          </div>
          </div>

           {/* Single Car Grid */}
           <div className="singleCar grid"> 
            <img src={car6} alt="Car Image" />
            <h5 className="carTitle">
            Used 2019 Audi s4 Premium Plus
          </h5>
          <span className="miles">
            11457 Miles
          </span>
          <span className="AWD">
            AWD 4-cylinder Turbo
          </span>

          <div className="price_buyBtn flex">
            <span className="price">
              ksh. 4,081,200
            </span>
              <span className="buyBtn">
                Buy Now
              </span>
          </div>
          </div>

           {/* Single Car Grid */}
           <div className="singleCar grid singleCarActive"> 
            <img src={car4} alt="Car Image" />
            <h5 className="carTitle">
            Used 2019 Audi s4 Premium Plus
          </h5>
          <span className="miles">
            11457 Miles
          </span>
          <span className="AWD">
            AWD 4-cylinder Turbo
          </span>

          <div className="price_buyBtn flex">
            <span className="price">
              ksh. 4,081,200
            </span>
              <span className="buyBtn">
                Buy Now
              </span>
          </div>
          </div>

           {/* Single Car Grid */}
           <div className="singleCar grid"> 
            <img src={car3} alt="Car Image" />
            <h5 className="carTitle">
            Used 2019 Audi s4 Premium Plus
          </h5>
          <span className="miles">
            11457 Miles
          </span>
          <span className="AWD">
            AWD 4-cylinder Turbo
          </span>

          <div className="price_buyBtn flex">
            <span className="price">
              ksh. 4,081,200
            </span>
              <span className="buyBtn">
                Buy Now
              </span>
          </div>
          </div>

           {/* Single Car Grid */}
           <div className="singleCar grid singleCarActive"> 
            <img src={car2} alt="Car Image" />
            <h5 className="carTitle">
            Used 2019 Audi s4 Premium Plus
          </h5>
          <span className="miles">
            11457 Miles
          </span>
          <span className="AWD">
            AWD 4-cylinder Turbo
          </span>

          <div className="price_buyBtn flex">
            <span className="price">
              ksh. 4,081,200
            </span>
              <span className="buyBtn">
                Buy Now
              </span>
          </div>
          </div>

           {/* Single Car Grid */}
           <div className="singleCar grid"> 
            <img src={car1} alt="Car Image" />
            <h5 className="carTitle">
            Used 2019 Audi s4 Premium Plus
          </h5>
          <span className="miles">
            11457 Miles
          </span>
          <span className="AWD">
            AWD 4-cylinder Turbo
          </span>

          <div className="price_buyBtn flex">
            <span className="price">
              ksh. 4,081,200
            </span>
              <span className="buyBtn">
                Buy Now
              </span>
          </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Auction