import React from 'react'
// import {FaPeopleCarry} from 'react-icons'
import '../styles/Contact.css'

// import {Link} from "react-router-dom"

function Contact() {
  return (
    <div>
      
      <div className='contact'>
        <p>Contact us</p>
      </div>
      <form className='formContact'>
            <div className='inputtt'>
                <div className='column'>
                   <input type="text" placeholder="Full Name" className='contact-input '/> 
                  <input type="email" placeholder="Email" className='contact-input cr' />  
                </div>
             <div className='column'>
              <input type="tel" placeholder="Phone"  className='contact-input '/>
              <input type="text" placeholder="Services" className='contact-input cr' />  
             </div>
            
              <textarea placeholder="Message" className='contact-text'  />
             <button type="submit" className='contact-submit'>SUBMIT</button>

            </div>
        </form>
      <div className='CONTACTUS '>
        <b>WHY BOOK WITH US?</b>
        <div className='CONTACTUS1'>
          <h>Best Price Guarantee</h>
          <h>Customer care available 24/7</h>
          <h>Free Travel Insureance</h>
          <h>Hand-picked Tours & Activities</h>
        </div>
      </div>
      <div className='TOURLIST22'>
        <b>GET A QUESTION?</b>
        <p>Do not hesitage to give us a call.<br />
          We are an expert team and we are happy <br />
          to talk to you.</p>
        <div className='CONTACTUS2-1'>
          <h>holidayplanners@gmail.com</h>
          <h>+123 456 7890</h>
        </div>
      </div>
    </div>

  )
}

export default Contact