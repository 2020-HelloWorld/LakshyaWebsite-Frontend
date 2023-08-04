import React from 'react'
import IntroscreenStudentPage from './introscreen';
import CompaniesStudentPage from './companiesStudentPage';
import EventsCarousel from './eventsCarousal/eventsCarousel';
import IntershipTab from './internshipboxes';

import NavBar from '../../../layout/Navbar/studentNavBar';
import Footer from '../../../layout/footer/footer';



const candidateHome = () => {
  return (
    <>
    <NavBar/>
    <IntroscreenStudentPage/>    
    <EventsCarousel/>
    <IntershipTab/>
    <CompaniesStudentPage/>
    <Footer/>
    </>
  )
}

export default candidateHome