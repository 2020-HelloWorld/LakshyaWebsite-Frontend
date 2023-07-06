import React from 'react';
import './flexbutton.css';

const FlexButton = () => {
  return (
    <div className="flexCenter flex-container">
      <Box
       
        content="Student"
        buttonText="Get Started"
        imageSrc="./student3.png"
      />
      <Box
        
        content="Companies"
        buttonText="Hire"
        imageSrc="./company.png"
      />
      <Box
       
        content="Mentors"
        buttonText="Join As A Mentor"
        imageSrc="./mentor.png"
      />
    </div>
  );
};

const Box = ({ backgroundColor, content, buttonText, imageSrc }) => {
  return (
    <div className="box-container" style={{ backgroundColor }}>
      <div className="content">{content}</div>
      <div><img src={imageSrc} alt="Image" className="box-image" /></div>
      <div><button className="button">{buttonText}</button></div>
    </div>
  );
};

export default FlexButton;
