import React from 'react'
import './Review.css'

import {BsArrowRightShort} from 'react-icons/bs'
import {BsArrowLeftShort} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

import carR from '../../Assets/carR.jpg'
import user1 from '../../Assets/user1.jpg'

const Review = () => {
  return (
    <div className='review section'>
        <div className="secContainer container">

            <div className="secHeading flex">
                <h3 className="secTitle">
                    Recent Reviews
                </h3>

                <BsArrowLeftShort className='icon leftIcon'/>
                <BsArrowRightShort className='icon rightIcon'/>

            </div>

            {/* Review container */}

            <div className="reviewContainer grid">
                {/* single review */}

                <div className="singleReview grid">
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
            </div>
        </div>
    </div>
  )
}

export default Review
