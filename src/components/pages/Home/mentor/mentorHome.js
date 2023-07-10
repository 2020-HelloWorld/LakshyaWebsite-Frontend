import React from 'react'
import MentorIntro from './MentorIntro/MentorIntro';
import Testimonial from './testimonials/Testimonial';
import MentorNavBar from './MentorNav/MentorNavBar';
import { Footer} from '../../../layout';

function MentorHome() {
  return (
    <>
    <MentorNavBar/>
    <MentorIntro />
    <Testimonial />
    <Footer/>
  </>
  )
}

export default MentorHome;