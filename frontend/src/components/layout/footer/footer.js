import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <img src="logo.png" className="logo" alt="Logo"></img>
          <p>Empowering, inpiring always</p>
        </div>
        <div className="col">
          <h3>Office <div className="underline"><span></span></div></h3>
          <p>ITPL Road</p>
          <p>Whitefield, Bangalore</p>
          <p>pesuniversity@gmail.com</p>
          <h4>+9`986756453</h4>
        </div>
        <div className="col">
          <h3>Links<div className="underline"><span></span></div></h3>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div className="col">
          <h3>Newsletter<div className="underline"><span></span></div></h3>
          <form>
            <input type="email" placeholder="Enter your email id" required></input>
            <button type="submit">Submit</button>
          </form>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>  
      </div>
      <hr />
      <p className="copyright">Lakshya: Empowering Futures, Inspiring Excellence © 2023- All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
