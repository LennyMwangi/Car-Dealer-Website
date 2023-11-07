import React from 'react'
import './Review.css'

import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

const Review = () => {
  return (
    <div className='review'>
      <div className="secContaineer container">

        <div className="scHeading flex">
          <h3 className="secTitle">
              Recent Reviews
          </h3>

          <div className="navBtns flex">
           <BsArrowLeftShort classname='icon leftIcon'/>
           <BsArrowRightShort classname='icon rightIcon'/>
          </div>
        </div>

        {/* Review Container  */}
        <div className="reviewContainer grid">
          {/* single review */}
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src="src/Assets/carR.jpg" alt="Car Image" />
            </div>
            <h5 className="reviewTitle">
                2023 Cadiallac
            </h5>
            <span className="desc">
            2023 Cadillac marries luxury design and advanced tech for an impressive, refined drive.
            </span>

            <div className="reviewDiv flex">
              <div className="leftDiv fle">
                <div className="reviewer">
                  <img src="src/Assets/user1.jpg" alt="reviewer image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Jackline Nelson
                  </span>
                  <p>Chief Editor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review