import React from 'react'
import './Trending.css'

 import {BsArrowRightShort} from 'react-icons/bs'
 import {BsArrowLeftShort} from 'react-icons/bs'

const Trending = () => {
  return (
    <div className='trending section'>
      <div className="secContainer container">
        <div className="secHeading flex">
        <h3 className="secTitle">
          Trending Near You
        </h3>

        <div className="navBtns flex">
          <BsArrowLeftShort className='icon leftIcon'/>
          <BsArrowRightShort className='icon rightIcon'/>
        </div>
        </div>

        <div className="carContainer grid">
          {/* Single Car Grid */}
          <div className="singleCar grid"> 
            <img src="src/Assets/car10.jpg" alt="Car Image" />
            <h5 className="carTitle">
            Used 2019 Audi s4 Premium Plus
          </h5>
          <span className="miles">
            11457 Miles
          </span>
          <span className="AWD">
            AWD 4-cylinder Turbo
          </span>

          <div className="price_seller flex">
            <span className="price">
              ksh. 4,081,200
            </span>
              <span className="seller">
                Best Seller
              </span>
          </div>
          </div>

          {/* Single Car Grid */}
          <div className="singleCar grid"> 
            <img src="src/Assets/car7.jpg" alt="Car Image" />
            <h5 className="carTitle">
            Used 2019 Audi s4 Premium Plus
          </h5>
          <span className="miles">
            11457 Miles
          </span>
          <span className="AWD">
            AWD 4-cylinder Turbo
          </span>

          <div className="price_seller flex">
            <span className="price">
              ksh. 4,081,200
            </span>
              <span className="seller">
                Best Seller
              </span>
          </div>
          </div>

          {/* Single Car Grid */}
          <div className="singleCar grid"> 
            <img src="src/Assets/car8.jpg" alt="Car Image" />
            <h5 className="carTitle">
            Used 2019 Audi s4 Premium Plus
          </h5>
          <span className="miles">
            11457 Miles
          </span>
          <span className="AWD">
            AWD 4-cylinder Turbo
          </span>

          <div className="price_seller flex">
            <span className="price">
              ksh. 4,081,200
            </span>
              <span className="seller">
                Best Seller
              </span>
          </div>
          </div>

          {/* Single Car Grid */}
          <div className="singleCar grid"> 
            <img src="src/Assets/car9.jpg" alt="Car Image" />
            <h5 className="carTitle">
            Used 2019 Audi s4 Premium Plus
          </h5>
          <span className="miles">
            11457 Miles
          </span>
          <span className="AWD">
            AWD 4-cylinder Turbo
          </span>

          <div className="price_seller flex">
            <span className="price">
              ksh. 4,081,200
            </span>
              <span className="seller">
                Best Seller
              </span>
          </div>
          </div>
          {/* Single Car Grid */}
          <div className="singleCar grid"> 
            <img src="src/Assets/car11.jpg" alt="Car Image" />
            <h5 className="carTitle">
            Used 2019 Audi s4 Premium Plus
          </h5>
          <span className="miles">
            11457 Miles
          </span>
          <span className="AWD">
            AWD 4-cylinder Turbo
          </span>

          <div className="price_seller flex">
            <span className="price">
              ksh. 4,081,200
            </span>
              <span className="seller">
                Best Seller
              </span>
          </div>
          </div>
          {/* Single Car Grid */}
          <div className="singleCar grid"> 
            <img src="src/Assets/car12.jpg" alt="Car Image" />
            <h5 className="carTitle">
            Used 2019 Audi s4 Premium Plus
          </h5>
          <span className="miles">
            11457 Miles
          </span>
          <span className="AWD">
            AWD 4-cylinder Turbo
          </span>

          <div className="price_seller flex">
            <span className="price">
              ksh. 4,081,200
            </span>
              <span className="seller">
                Best Seller
              </span>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Trending