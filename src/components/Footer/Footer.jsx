import React from 'react'
import './Footer.css'
// import footerlogo from '../../assets/footer_logo.svg'
import usericon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
               <h1>Purane</h1>
                <p>I am a frontend developer from Kathmandu,Nepal with 10years of experiences in companies  like Microsoft,Tesla and Apple</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={usericon} alt="" />
                    <input type="email"  placeholder='Enter your email' name="email"/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2024 Maxess Watt. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
