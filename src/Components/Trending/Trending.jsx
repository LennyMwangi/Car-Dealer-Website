import React, {useEffect} from 'react'
import './Trending.css'
import './ImageComponent.css'

 import {BsArrowRightShort} from 'react-icons/bs'
 import {BsArrowLeftShort} from 'react-icons/bs'

 import car10 from '../../Assets/car10.jpg'
 import car7 from '../../Assets/car7.jpg'
 import car8 from '../../Assets/car8.jpg'
 import car9 from '../../Assets/car9.jpg'
 import car11 from '../../Assets/car11.jpg'
 import car12 from '../../Assets/car12.jpg'

 // import Aos for animation and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'


const Trending = () => {

  // Initialise Aos and set the default animation duration
  useEffect(()=>{
    Aos.init(
      {
        duration: 2000
      }
    )
  }, [])

  return (
    <div className='trending section'>
      <div className="secContainer container">
        <div data-aos='fade-up' className="secHeading flex">
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
          <div data-aos='fade-up'  className="singleCar grid"> 
            <img className="image-container" src={car10} alt="Car Image" />
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
          <div data-aos='fade-up'  className="singleCar grid"> 
            <img className="image-container" src={car7} alt="Car Image" />
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
          <div data-aos='fade-up'  className="singleCar grid"> 
            <img className="image-container" src={car8} alt="Car Image" />
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
          <div data-aos='fade-up'  className="singleCar grid"> 
            <img className="image-container" src={car9} alt="Car Image" />
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
          <div data-aos='fade-up'  className="singleCar grid"> 
            <img className="image-container" src={car11} alt="Car Image" />
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
          <div data-aos='fade-up'  className="singleCar grid"> 
            <img className="image-container"  src={car12} alt="Car Image" />
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