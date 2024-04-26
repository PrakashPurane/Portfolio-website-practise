import React from 'react'
import './Services.css'
import ServicesData from '../../assets/services_data.js'
import arrowicon from '../../assets/arrowimage.jpg'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            {/* <img src={} alt="" /> */}
        </div>
      <div className="services-container">
        {ServicesData.map((service,index)=>{
            return <div key={index} className="services-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="services-readmore">
                    <p>Read More</p>
                    <img src={arrowicon} alt="" />
                </div>
            </div>

        })}
      </div>
    </div>
  )
}

export default Services
