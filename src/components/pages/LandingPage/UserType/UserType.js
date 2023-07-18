import React from 'react';
import studentImage from '../../../../static/design/studentuser.svg';
import companyImage from '../../../../static/design/companyuser.png';
import mentorImage from '../../../../static/design/mentoruser.svg';
import { Link } from 'react-router-dom';

const UserType = () => {
  return (
    
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mx-8 md:mx-20 lg:mx-40 my-10">
   
      <Box content="Student" buttonText="Get Started" next="/home/candidate" image={studentImage} />
      <Box content="Companies" buttonText="Hire" next="/home/company" image={companyImage} />
      <Box content="Mentors" buttonText="Join As A Mentor" next="/home/mentor" image={mentorImage} />
    </div>
  );
};

const Box = ({ content, buttonText, next, image }) => {
  return (
    <Link to={next} className="no-underline">
    <div className="box-container bg-lightsteelblue flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-transform transition-shadow cursor-pointer w-full md:w-auto h-96 md:h-auto">
      
      <div>
        <img src={image} alt={content} className="w-full h-48 rounded-t-xl mb-4" />
        <h3 className="title text-lg font-bold text-gray-900">{content}</h3>
        <p className=" text-base text-gray-700 my-4">Practice, compete and build with a community of 7.6 million developers.</p>
        <a className="link bg-gray-100 text-white px-4 py-2 border border-blue-500 transition-colors hover:bg-white hover:text-blue-900" id="joinnow">{buttonText}</a>
      </div>
    </div>
    </Link>
  );
};

export default UserType;
