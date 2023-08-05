import React from 'react';
import NavBar from '../../../layout/Navbar/studentNavBar';
import { Footer } from '../../../layout';
import CompanyDetails from './CompanyDetails';
const companydet = () => {
  return (
    <div>
      <NavBar />
      <CompanyDetails/>
      <Footer/>
    </div>
  );
};

export default companydet;