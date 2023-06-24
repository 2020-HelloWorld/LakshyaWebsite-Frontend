import React from 'react';
import './bio.css';

const Bio = ({ name, occupation }) => {
  return (
    <div className="bio">
      <h2>{name}</h2>
      <p>{occupation}</p>
    </div>
  );
};

export default Bio;
