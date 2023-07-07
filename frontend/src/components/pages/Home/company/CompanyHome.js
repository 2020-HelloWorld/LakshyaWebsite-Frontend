import React from 'react'
import CompanyIntro from './CompanyIntro/CompanyIntro'
import {Footer,Navbar} from '../../../layout'

function CompanyHome() {
  return (
    <div className='companyHome'>
       <Navbar/>
       <CompanyIntro/>
       <Footer/>
  </div>
  )
}

export default CompanyHome