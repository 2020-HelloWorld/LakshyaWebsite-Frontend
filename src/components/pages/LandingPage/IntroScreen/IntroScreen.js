import React from 'react';
import "./IntroScreen.css";
import introimg from '../../../../static/design/introimg.png';

const IntoScreen = () => {
  return (
    <section className="intoduction-wrapper">
      <div className="paddings  margin intoduction-container">
        <div className="flexColStart intoduction-left">
          <div className="intoduction-title">
            <h1>Empowering Women,</h1>    
            <h1>Shaping Careers,</h1> 
            <h1>Building Future</h1>
          </div>
          <div className="flexColStart intoduction-des">
            <span>Unlocking Potential, Inspiring Careers: Empowering Women<br />  to Thrive in the Workforce and Beyond</span>       
          </div>
        </div>
        <div className=" intoduction-right">
           <div className="image-container"> 
            <img src={introimg} alt="" />
          </div> 
        </div>
      </div>
    </section>
  );
};

export default IntoScreen;
