import React from 'react'
import NavigationBar from './NavigationBar';
import './style.css';
function ContactUs() {
  return (
    <div>
      <NavigationBar />
      <br />
      <div class="box">
      <p class="detail">
      <p> CONTACT INFORMATION</p>
       <p class="s"> Address:- Kolkata-700001, West Bengal
           <br></br>Phone no.:- 003 2254 1545
           <br></br>Email:- shopping01@gmail.com</p>
       </p> 
       <form>

         <div class="form-group">
           <label for="name">ENTER NAME</label>
           <input type="text" id="name" name="name" required/>
         </div>

         <div class="form-group">
           <label for="email">ENTER EMAIL</label>
           <input type="text" id="email" name="email" required/>
         </div> 

          <div class="form-group">
           <label for="contact-number">CONTACT NUMBER</label>
           <input type="digit" id="contact-number" name="contact-number" required/>
           </div>
           
          <div class="form-group">
           <label for="massage">MASSAGE</label>
           <textarea name="massage" id="massage" cols="30" rows="5" required/>
         </div>  

         <button type="submit">submit</button>
       </form>
    </div>  

    </div>
  )
}

export default ContactUs
