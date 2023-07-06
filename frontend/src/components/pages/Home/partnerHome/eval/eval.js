import React from 'react';
import './eval.css'

const BoxContainer = () => {
  return (
    <div className="container">
      <div className="box" style={{ backgroundColor: '#FFC0CB' }}>
        <h2>Interview</h2><br></br>
        <p>Content 1</p>
      </div>
      <div className="box" style={{ backgroundColor: '#FFA7B5' }}>
        <h2>Upskill</h2><br></br>
        <p>Content 2</p>
      </div>
      <div className="box" style={{ backgroundColor: '#FF8DA0' }}>
        <h2>Engage</h2><br></br>
        <p>Content 3</p>
      </div>
      <div className="box" style={{ backgroundColor: '#FF749B' }}>
        <h2>Screen</h2><br></br>
        <p>Content 4</p>
      </div>
    </div>
  );
};

export default BoxContainer;
