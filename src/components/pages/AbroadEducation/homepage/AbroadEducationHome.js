import React from 'react'
import NavBar from '../../../layout/Navbar/studentNavBar'
import Footer from '../../../layout/footer/footer'

import AbroadEdIntro from './abroadedintro'
import Universities from './universities'
import BachelorsDeg from './bachelorsdeg/bachelorsdegcarousel'
import MastersDeg from './mastersdeg/mastersdegcarousel'

const AbroadEducationHome = () => {
  return (
    <>
    <NavBar/>
    <AbroadEdIntro/>
    <Universities/>
    <BachelorsDeg/>
    <MastersDeg/>
    <Footer/>
    </>
  )
}

export default AbroadEducationHome