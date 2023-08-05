import React from 'react';
import jobimage from '../../../../../static/design/companyjob.svg';
import eventimage from '../../../../../static/design/companyevent.svg';
import courseimage from '../../../../../static/design/companycourse.svg';
import { Link } from 'react-router-dom';

const EventType = () => {
  return (
    
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mx-8 md:mx-20 lg:mx-40 my-10">
   
      <Box content="Add a internship/job" buttonText="Add" next="/post/job" image={jobimage} />
      <Box content="Add a event" buttonText="Add" next="/" image={eventimage} />
      <Box content="Add a course" buttonText="Add" next="/" image={courseimage} />
    </div>
  );
};

const Box = ({ content, buttonText, next, image }) => {
  return (
    <Link to={next} className="no-underline">
    <div className="bg-lightsteelblue flex flex-col items-center justify-center p-8 rounded-lg shadow-md transition-transform transition-shadow cursor-pointer w-full md:w-auto  md:h-auto hover:shadow-xl">
      
      <div>
        <img src={image}  className="w-64 h-56 rounded-t-xl mb-4" />
        <p className="text-base text-gray-700 my-4 text-center">{content}</p>
        
        <div className="flex flex-col items-center">
            <button className="link bg-gray-100 text-white text-[12px] px-7 py-3 border border-blue-500 transition-colors hover:bg-white hover:text-blue-900 align-center cursor-pointer rounded-md" id="joinnow">
              {buttonText}
            </button>
          </div>
      </div>
    </div>
    </Link>
  );
};

export default EventType;
