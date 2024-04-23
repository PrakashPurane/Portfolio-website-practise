import React from 'react'
import './Navbar.css'
// import prakashlogo from '../../assets/prakashlogo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1 className='purane-heading'> Purane</h1>
        {/* <img src={prakashlogo} alt="" /> */}
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
      <div className='nav-connect'>Connect With Me</div>
    </div>
  )
}

export default Navbar
