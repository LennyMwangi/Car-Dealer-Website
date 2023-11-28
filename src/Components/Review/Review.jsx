import React, {useEffect} from 'react'
import './Review.css'

import {BsArrowRightShort} from 'react-icons/bs'
import {BsArrowLeftShort} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

import carR from '../../Assets/carR.jpg'
import carR1 from '../../Assets/carR1.jpg'
import carR2 from '../../Assets/carR2.jpg'
import user1 from '../../Assets/user1.jpg'
import user2 from '../../Assets/user1.jpg'
import user3 from '../../Assets/user1.jpg'

 // import Aos for animation and scroll reveal
 import Aos from 'aos'
 import 'aos/dist/aos.css'

const Review = () => {

     // Initialise Aos and set the default animation duration
  useEffect(()=>{
    Aos.init(
      {
        duration: 2000
      }
    )
  }, [])

  return (
    <div className='review section'>
        <div className="secContainer container">

            <div data-aos='fade-up' className="secHeading flex">
                <h3 className="secTitle">
                    Recent Reviews
                </h3>

                <BsArrowLeftShort className='icon leftIcon'/>
                <BsArrowRightShort className='icon rightIcon'/>

            </div>

            {/* Review container */}

            <div className="reviewContainer grid">
                {/* single review */}
                <div className="singleReview grid" data-aos='fade-up'>
                    <div className="imgDiv">
                        <img src={carR} alt="car image" />
                    </div>
                    <h5 className="reviewTitle">
                        2023 Cadiallac
                    </h5>
                    <span className="desc">
                    Luxurious, tech-savvy, and spacious—a standout choice in its class.
                    </span>

                    <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviwerImage">
                                    <img src={user1}alt="reviewer image" />
                                </div>
                                <div className="aboutReviwer">
                                    <span className="name">
                                        Lenny Muriuki
                                    </span>
                                    <p>Chief Editor</p>
                                </div>
                            </div>
                            <div className="rightDiv flex">
                            <AiFillStar className='icon'/>
                            <blockquote>4.84</blockquote>
                            </div>
                    </div>
                </div>

                {/* single review */}
                <div className="singleReview grid" data-aos='fade-up'>
                    <div className="imgDiv">
                        <img src={carR1} alt="car image" />
                    </div>
                    <h5 className="reviewTitle">
                        2023 Cadiallac
                    </h5>
                    <span className="desc">
                    Luxurious, tech-savvy, and spacious—a standout choice in its class.
                    </span>

                    <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviwerImage">
                                    <img src={user2}alt="reviewer image" />
                                </div>
                                <div className="aboutReviwer">
                                    <span className="name">
                                        Peter Muriuki
                                    </span>
                                    <p>C0-Editor</p>
                                </div>
                            </div>
                            <div className="rightDiv flex">
                            <AiFillStar className='icon'/>
                            <blockquote>4.84</blockquote>
                            </div>
                    </div>
                </div>

                {/* single review */}
                <div className="singleReview grid" data-aos='fade-up'>
                    <div className="imgDiv">
                        <img src={carR2} alt="car image" />
                    </div>
                    <h5 className="reviewTitle">
                        BMW
                    </h5>
                    <span className="desc">
                    Luxurious, tech-savvy, and spacious—a standout choice in its class.
                    </span>

                    <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviwerImage">
                                    <img src={user3}alt="reviewer image" />
                                </div>
                                <div className="aboutReviwer">
                                    <span className="name">
                                        James Doe
                                    </span>
                                    <p>Chief Editor</p>
                                </div>
                            </div>
                            <div className="rightDiv flex">
                            <AiFillStar className='icon'/>
                            <blockquote>4.84</blockquote>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review
