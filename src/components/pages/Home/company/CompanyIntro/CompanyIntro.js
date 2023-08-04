import React from 'react';
import './CompanyIntro.css'; // Import the CSS file for styling
import axios from 'axios';
import { useHistory } from "react-router-dom";




const Front = () => {
  const history=useHistory();
  const handleLogout = async () => {
  
    try {
      const res = await axios.post("/auth/logout/",{})
     
      if(res.status===201){
        console.log("Redirect",res);
        history.replace('/');
      }
    }catch(e){
      console.log(e.response.status);
    }
  };

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
      <button onClick={handleLogout}> logout</button>
    </div>
  );
};


export default Front;
