import React from 'react'
import MentorIntro from './MentorIntro/MentorIntro';
import Testimonial from './testimonials/Testimonial';
import { Footer, Navbar } from '../../../layout';

function MentorHome() {
  return (
    <>
    <Navbar/>
    <MentorIntro />
    <Testimonial />
    <Footer/>
  </>
  )
}

export default MentorHome
