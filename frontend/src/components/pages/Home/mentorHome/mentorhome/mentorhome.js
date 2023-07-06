import React from 'react';
import './mentorhome.css';
import mentorImage from './img/mentor.jpg';

const MentorHome = () => {
  return (
    <div className="mentor1-container">
      <div className="image-container">
        <img src={mentorImage} alt="Mentor" className="mentor-image" />
      </div>
      <div className="content">
        <h1 className="title">Lorem Ipsum</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="cta">
          <h2 className="subtitle">Become a mentor on Lakshya</h2>
          <button className="apply-button">Apply Now </button>
        </div>
      </div>
    </div>
  );
}

export default MentorHome;
