import React from 'react';
import './MentorNavBar.css'

const MentorNavBar = () => {
  return (
    <nav className="mentor-nav">
      <div className="mentor-nav-left">
        <div className="mentor-nav-logo">Lakshya</div>
      </div>
      <div className="mentor-nav-right">
        <button className="mentor-nav-login-button">Log In</button>
        <button className="mentor-nav-sign-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default MentorNavBar;
