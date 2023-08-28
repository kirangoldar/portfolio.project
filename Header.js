import React from 'react';
import profile from "../../assets/profile.jpg";
import boostrap from "../../assets/boostrap.png";
import javascript from "../../assets/javascript.png";
import html from "../../assets/html.png";
import CSS from "../../assets/CSS.png";
import "./Header.css";

function Header() {
  return (
    <div>
    <div className="porfile-img-container">
      <img src={profile} height="300" width="300" alt="" />
    </div>
    <div className="header-container">
            <div className="header-content">
                <h1>Hii I'm <span>kiran</span></h1>
                <p>Welcome to my portfolio website.<br></br>
                this is my official portfolio website to showes all<br></br>
                details and work experience of web development.
                </p>
                
                <a href="/">Download Resume</a>
            </div>
            <div className="languages">
             <div>
             <h3>Programming Skills</h3>
            </div>
            <div className="languages-content">
            <img src={html} height="80" width="100" alt="/"></img>
            <img src={CSS} height="80" width="100" alt="/"></img>
            <img src={javascript} height="80" width="100" alt="/"></img>
            <img src={boostrap} height="80" width="100" alt="/"></img>
         </div>
         <div className="card-1">
         <div className="card-A">
          <div className="newspaper-reader">
          <div>
            <h3>NewsPaper Reader</h3>
            <div className="languages-content">
            <img src={html} height="20" width="40" alt="/"></img>
            <img src={CSS} height="20" width="40" alt="/"></img>
            <img src={javascript} height="20" width="40" alt="/"></img>
         </div>
            </div>
            <p>I made this project using html, css and javascript</p>
          </div>
         </div>
         <div className="card-B">
          <div className="newspaper-reader">
            <div>
            <h3>portfolio</h3>
            <div className="languages-content">
            <img src={html} height="20" width="40" alt="/"></img>
            <img src={CSS} height="20" width="40" alt="/"></img>
            <img src={javascript} height="20" width="40" alt="/"></img>
         </div>
            </div>
            <p>I made this project using html, css and javascript</p>
          </div>
         </div>
         <div className="card-C">
          <div className="newspaper-reader">
          <div>
            <h3>To-Do List</h3>
            <div className="languages-content">
            <img src={html} height="20" width="40" alt="/"></img>
            <img src={CSS} height="20" width="40" alt="/"></img>
            <img src={javascript} height="20" width="40" alt="/"></img>
         </div>
            </div>
            <p>I made this project using html, css and javascript</p>
          </div>
         </div>
         </div>
            <div className="hire-me">
             <button> Hire me</button>
            </div>
            </div>
            {/*payment links*/}
            <div className="header-payment-container">
                  <i class="fa-brands fa-paypal"></i>
                  <i class="fa-brands fa-cc-visa"></i>
                  <i class="fa-brands fa-cc-mastercard"></i>
                  <i class="fa-brands fa-cc-amex"></i>
            </div>
    </div>
  </div>
  );
};

export default Header;