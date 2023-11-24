import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerContainer container">
        <div className="footerMenuDiv grid">
          {/* Single grid1 */}
          <div className="singlrGrid">
            <span className="footerTitle">
              About
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">
                How it works
              </li>
              <li className="footerLi">
                Careers
              </li>
              <li className="footerLi">
                Affiliates
              </li>
              <li className="footerLi">
                Media
              </li>
            </ul>
          </div>

          {/* Single grid2 */}
          <div className="singlrGrid">
            <span className="footerTitle">
              Become seller
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">
                Add vehicles
              </li>
              <li className="footerLi">
                Resource center
              </li>
              <li className="footerLi">
                Bonds
              </li>
              <li className="footerLi">
                Release Dates
              </li>
            </ul>
          </div>

          {/* Single grid3 */}
          <div className="singlrGrid">
            <span className="footerTitle">
              Community
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">
                Recommendations
              </li>
              <li className="footerLi">
                Gift Cards
              </li>
              <li className="footerLi">
                Top Ups
              </li>
              <li className="footerLi">
                Selling
              </li>
            </ul>
          </div>

          {/* Single grid4 */}
          <div className="singlrGrid">
            <span className="footerTitle">
              Booking Support
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">
                Updates
              </li>
              <li className="footerLi">
                Help center
              </li>
              <li className="footerLi">
                Garages
              </li>
              <li className="footerLi">
                Trust & Safety
              </li>
            </ul>
          </div>
        </div>

        {/*  Footer lower section*/}
        <div className="lowerSection grid">
          <p>2023 All right reserved</p>
          <blockquote>LennyMuriuki</blockquote>
        </div>
      </div>
    </div>
  )
}

export default Footer