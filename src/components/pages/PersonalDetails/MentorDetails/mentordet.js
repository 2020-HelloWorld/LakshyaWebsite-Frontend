import React from 'react';
import NavBar from '../../../layout/Navbar/studentNavBar';
import { Footer } from '../../../layout';
import MentorDetails from './MentorDetails';
const mentordet = () => {
  return (
    <div>
      <NavBar />
      <MentorDetails/>
      <Footer/>
    </div>
  );
};

export default mentordet;