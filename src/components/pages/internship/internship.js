import React from 'react';
import InternJobList from './InternJobList';
import NavBar from '../../layout/Navbar/studentNavBar';

const Internship = () => {
  return (
    <div className="pt-8">
      <NavBar />
      <div>
        
        <div>
          <InternJobList />
        </div>
      </div>
    </div>
  );
};

export default Internship;
