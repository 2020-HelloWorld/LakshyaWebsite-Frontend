import React from 'react';
import JobList from './JobListing';
import NavBar from '../../../layout/Navbar/studentNavBar';
import Footer from '../../../layout/footer/footer';
const jobList = () => {
  return (
    <div>
        <NavBar />
        <JobList />
        <Footer/>
    </div>
  );
};

export default jobList;
