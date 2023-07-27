import React from 'react'
import { Navbar ,Footer} from '../../layout';
import Founder from './founder';
import Vision from './vision';

const aboutus = () => {
  return (
    <>
    <Navbar/>
    <Founder/>
    <Vision/>
    <Footer/>
    </>
  )
}

export default aboutus;