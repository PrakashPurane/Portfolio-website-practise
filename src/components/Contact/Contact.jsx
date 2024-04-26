import React from 'react'
import './Contact.css'
import mailicon from '../../assets/mail_icon.svg'
import locationicon from '../../assets/location_icon.svg'
import callcon from '../../assets/call_icon.svg'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8337ff26-20ef-49d3-960f-4fc954457f89");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");

          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    
    
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I am currently available to take a new projects, so feel free to send a message  about anything that you want to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mailicon} alt="" />
                        <p>purane@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={callcon} alt="" />
                        <p>+9779834512304</p>
                    </div>
                    <div className="contact-detail">
                        <img src={locationicon} alt="" />
                        <p>Kathmandu,Nepal</p>
                    </div>
                </div>
            </div>

            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name="name"  />
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your email'name="email"  />
                <label htmlFor="">Write your message here</label>
                <textarea name="message"  rows="10" placeholder='Enter your message here'></textarea>
                <button  type='submit' className='contact-submit'>Submit now</button>
                <span>{result}</span>
            </form>
        </div>
        
      
    </div>
  )
}

export default Contact
