import React from 'react';
import NavBar from '../../../layout/Navbar/studentNavBar';
import { Footer } from '../../../layout';
import CandidateDetails from './CandidateDetails';
const candidatedet = () => {
  return (
    <div>
      <NavBar />
      <CandidateDetails/>
      <Footer/>
    </div>
  );
};

export default candidatedet;