import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ handleClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className={`button ${isHovered ? 'hovered' : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Click Me
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;
