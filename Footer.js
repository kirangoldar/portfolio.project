import React from 'react'
import logo from "../../assets/logo.png";
import "./Footer.css";


const Footer = () => {
  return (
    <footer>
      <div class="contact"><h3>Contact Us</h3><br></br><br></br>
        <h7><i class="fa-solid fa-phone"></i>+1234567892</h7><br></br>
        <h7><i class="fa-solid fa-envelope"></i>kirangoldar90@gmail.com</h7>
     </div>
    <div className="footer-logo">
      <img src={logo} height="150" width="200" alt="logo"/>
      <p>@ kiran. All right reserved</p>
      <li>
       <span><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
       <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
        <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://twitter.com/home"><i className="fa-brands fa-twitter"></i></a>
        <a href="https://www.linkedin.com/feed/"><i className="fa-brands fa-linkedin"></i></a></span>
      </li>
     </div>
  </footer>
  );
};

export default Footer;