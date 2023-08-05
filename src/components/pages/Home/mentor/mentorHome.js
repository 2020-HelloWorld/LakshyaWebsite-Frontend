import React from 'react'
import MentorIntro from './mentorintroscreen';
import StartHere from './starthere';
import Onboard from './onboardCarousel/onboardCarousel';


import { Footer} from '../../../layout';
import NavBar from '../../../layout/Navbar/studentNavBar'

function MentorHome() {
  return (
    <>    
    <NavBar/>
    <MentorIntro />
    <StartHere/>
    <Onboard/>    
    <Footer/>
    </>
  )
}

export default MentorHome;