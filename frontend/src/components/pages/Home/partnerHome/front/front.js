import React from 'react';
import './front.css'; // Import the CSS file for styling

const Front = () => {
  return (
    <div className="front-wrapper with-background-image">
      <div className="text-container">
        <h1>Cultivate Success: Discover Your<br></br> Perfect Workforce with Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div ><button className="button-partner">Start Hiring</button></div>
      </div>
      <div className="imagefront-container">
        <img src="./company1.png" alt="Image 1" className="overlay-image" />
      </div>
    </div>
  );
};


export default Front;
