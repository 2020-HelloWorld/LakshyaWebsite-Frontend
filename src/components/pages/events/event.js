import React from 'react';
import EventList from './EventList/EventList';
import NavBar from '../../layout/Navbar/studentNavBar';
import Footer from '../../layout/footer/footer'

const Events = () => {
  return (
    <div>
    <NavBar/>
    <EventList/>
    <Footer/>
    </div>
  );
};

export default Events;
