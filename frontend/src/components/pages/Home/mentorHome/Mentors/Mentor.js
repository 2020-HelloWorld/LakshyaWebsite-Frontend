import React from 'react';
import './Mentor.css';

const Mentor = () => {
  return (
    <div className="mentor-container">
      <div className="text-center">
        <h2>Trusted by mentees all around the world</h2>
        <p>
          Lakshya attracts driven, highly ambitious mentees that are looking to grow in their careers,
          businesses and learnings.
        </p>
      </div>
      <dl className="mentor-stats">
        <div>
          <dt>Satisfaction</dt>
          <dd>97%</dd>
        </div>
        <div>
          <dt>Mentees</dt>
          <dd>10,000+</dd>
        </div>
        
      </dl>
    </div>
  );
};

export default Mentor;
