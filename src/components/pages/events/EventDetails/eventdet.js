import React from 'react';
import EventDetails from './EventDetails';
import NavBar from '../../../layout/Navbar/studentNavBar';
import Footer from '../../../layout/footer/footer'

const EventDet = () => {
  return (
    <div>
    <NavBar/>
    <EventDetails/>
    <Footer/>
    </div>
  );
};

export default EventDet;
