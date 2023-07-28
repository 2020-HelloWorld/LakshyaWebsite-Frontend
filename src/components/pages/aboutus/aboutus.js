import React from 'react'
import NavBar from '../../layout/Navbar/studentNavBar';
import Footer from '../../layout/footer/footer'
import Founder from './founder';
import Vision from './vision';

const aboutus = () => {
  return (
    <>
    <NavBar/>
    <Founder/>
    <Vision/>
    <Footer/>
    </>
  )
}

export default aboutus;