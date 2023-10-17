import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
          <div className="section3">
               <h1>"Reach Out to Us"</h1>
               <p>Have a question or need assistance? We're here to help! Feel free to reach out to our friendly team.</p>
               <div className="form">
               <div className="section3child1">
                    <div><input type="text" name="name" id="name" placeholder="Name"/> </div> 
                    <div><input type="email" name="email" id="email" placeholder="Email ID"/> </div> 
                    <div><input type="number" name="number" id="number" placeholder="Phone number"/> </div>
               </div>
               <div className="section3child2">
                         <input type="text" name="textarea" id="textarea"/>
               </div>
               <button className="formbtn">CONTACT US &nbsp;<i class="fa-solid fa-chevron-right"></i></button>
               </div>
          </div>
     </div>
  )
}
