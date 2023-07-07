import React from 'react';
import './styles.css'
import { Header ,Footer} from '../../layout';
import Hero from './hero/hero';
import FlexButton from './flexbutton/flexbutton';
import Companies from './companies/companies';
import AboutUs from './aboutus/aboutus';
import NavBar from '../../layout/Navbar/NavBar';
function landingPage() {
  return (
    <div>
      <div className="landing-page">
      <NavBar />
      <Hero />
      <FlexButton />
      <Companies />
      <AboutUs />
      <Footer />
    </div>
    </div>
  )
}

export default landingPage
