import React from 'react'
import './Review.css'

import {BsArrowRightShort} from 'react-icons/bs'
import {BsArrowLeftShort} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

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
                        <img src="src/Assets/carR.jpg" alt="car image" />
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
                                    <img src="src/Assets/user1.jpg" alt="reviewer image" />
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
