import React from 'react'
import './Hero.css'
import profilepicture from '../../assets/profileimage.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profilepicture} alt="" />
        <h1> <span>I am Maxess Watt,</span> a frontend developer based in Nepal.</h1>
        <p> I am a frontend developer from kathmandu, Nepal with 10years of experience</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div> 
            <div className="hero-resume">My resume</div>      
             </div>
    </div>
  )
}

export default Hero
