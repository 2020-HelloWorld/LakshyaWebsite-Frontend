import React from 'react';
import "./hero.css";
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <h1>Empowering Women,<br></br>Shaping Careers,<br></br>Building Future</h1>
          </div>
          <div className="flexColStart hero-des">
            <span>Unlocking Potential, Inspiring Careers: Empowering Women<br />  to Thrive in the Workforce and Beyond</span>
           
          </div>

          {/* <div className="flexCenter search-bar">
            <FaSearch color="var(--blue)" size={20} />
            <input type="text" />
            <button className="button">Search</button>
          </div> */}
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;