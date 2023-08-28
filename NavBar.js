import React from 'react';
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
    <div>
      <img src={logo}  height="150" width="200" alt="logo"/>
    </div>
    <div>
     <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Contact Us</a>
      </li>
      <li>
        <a href="/">portfolio</a>
      </li>
      <li>
        <a href="/">skills</a>
      </li>
     </ul>
    </div>
    </nav>
  );
};

export default Navbar