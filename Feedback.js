import React from 'react'
import boostrap from "../../assets/boostrap.png";
import javascript from "../../assets/javascript.png";
import html from "../../assets/html.png";
import CSS from "../../assets/CSS.png";
import "./Feedback.css";

const Contact = () => {
  return (
        <div className='contact-details'>
          <div>
            <h2>Feedback</h2>
            </div>
          <form>
            <div class="row">
              <div class="col-25">
           <label for="fullname">Full Name:</label>
           </div>
           <div class="col-75">
           <input type="text" id="fullname" name="fullname"></input><br></br>
           </div>
           </div>
           <div class="row">
           <div class="col-25">
           <label for="mobile no">Mobile Number:</label>
           </div>
           <div class="col-75">
           <input type="text" id="mnumber" name="mnumber"></input><br></br>
           </div>
           </div>
           <div class="row">
            <div class="col-25">
           <label for="email">Email Id:</label>
           </div>
           <div class="col-75">
           <input type="text" id="email" name="email"></input><br></br>
           </div>
           </div>
           <div class="row">
            <div class="col-25">
            <label for="comment">Comments</label>
            </div>
            <div class="col-75">
            <textarea id="comment" name="comment" ></textarea>
           </div>
           </div>
           <div class="row">
           <button>Submit</button>
           </div>
          </form>
          </div>
  );
};

export default Contact;