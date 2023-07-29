import React from 'react';
import Intro from './Intro';
import CourseList from './CourseList';
import CourseMentor from './CourseMentor';
import NavBar from '../../../layout/Navbar/studentNavBar';
import Footer from '../../../layout/footer/footer'

const Course = () => {
  return (
    <div>
    <NavBar/>
    <Intro/>
    <CourseList/>
    <CourseMentor/>
    <Footer/>
    
    </div>
  );
};

export default Course;
