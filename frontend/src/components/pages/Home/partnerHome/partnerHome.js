import React from 'react'
import { Header } from '../../../layout'
import RecruitComp from './recruitcomp/recruitcomp'
import Front from './front/front'
import { Eval } from '../..'
import {Footer} from '../../../layout'
import NavBar from '../../../layout/Navbar/NavBar'
function partnerHome() {
  return (
    <div className='companyHome'>
       <NavBar/>
       <Front/>
       <RecruitComp/>
       <Footer/>
       
  </div>
  )
}

export default partnerHome