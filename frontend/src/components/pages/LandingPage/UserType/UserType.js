import React from 'react';
import './UserType.css';
import { Link } from 'react-router-dom';

const FlexButton = () => {
  return (
    <div className="flexCenter flex-container">
      <Box
        
        content="Student"
        buttonText="Get Started"

        next="/Candidates"
      />
      <Box
        
        content="Companies"
        buttonText="Hire"
        next="/partnerHome"
      />
      <Box
        
        content="Mentors"
        buttonText="Join As A Mentor"
        next="/mentorHome"
      />
     
    </div>
  );
};

const Box = ({ backgroundColor, content, buttonText, next }) => {
  const divStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <Link to={next}>
    <div className="box-container" style={divStyle}>
      <div id="for-dev">
      <h3 className="title">{content}</h3>
      <p className="descriptionz">Practice, compete and build with a community of 7.6 million developers.</p>
      <a className="link" id="joinnow" >{buttonText}</a>
    </div>
    </div>
    </Link>
    
  );
};

export default FlexButton;

