import React from 'react'
import CompanyIntro from './CompanyIntro/CompanyIntro'
import EventType from './EventType/EventType'
import CompDashBoard from './DashBoard/CompDashBoard'
import {Footer,Navbar} from '../../../layout'

function CompanyHome() {
  return (
    <div className='companyHome'>
       <Navbar/>
       <CompanyIntro/>
       <EventType/>
       <CompDashBoard/>
       <Footer/>
  </div>
  )
}

export default CompanyHome