import React from 'react'
import './Auction.css'


import {BsArrowRightShort} from 'react-icons/bs'
import {BsArrowLeftShort} from 'react-icons/bs'

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
            <img src="src/Assets/audi.jpg" alt="Car Image" />
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
            <img src="src/Assets/car5.jpg" alt="Car Image" />
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
            <img src="src/Assets/car6.jpg" alt="Car Image" />
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
            <img src="src/Assets/car4.jpg" alt="Car Image" />
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
            <img src="src/Assets/car3.jpg" alt="Car Image" />
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
            <img src="src/Assets/car2.jpg" alt="Car Image" />
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
            <img src="src/Assets/car1.jpg" alt="Car Image" />
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