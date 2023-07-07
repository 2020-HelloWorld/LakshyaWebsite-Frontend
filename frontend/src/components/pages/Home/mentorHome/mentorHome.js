import React from 'react'
import MentorHome from './mentorhome/mentorhome';
import Companies from '../../LandingPage/companies/companies';
import Mentor from './Mentors/Mentor';
import Testimonial from './testimonials/Testimonial';
import { Footer, Header } from '../../../layout';
import NavBar from '../../../layout/Navbar/NavBar';
function mentorHome() {
  return (
    <>
    <NavBar/>
    <MentorHome />
    <Companies />
    <Mentor />
    <Testimonial />
    <Footer/>
  </>
  )
}

export default mentorHome
