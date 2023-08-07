// CourseTitle.js
import React from 'react';
import people from '../../../../static/logo/people.png';
import week from '../../../../static/logo/calendaricon.png';
import star from '../../../../static/logo/star.png';

const AECourseTitle = ({ title, description, imageUrl, weeks, registeredPeople, rating,price }) => {
  const iconMap = {
    weeks: week,
    people: people,
    rating: star,
  };

  return (
    <div>
       <div className="bg-white py-5 text-center"></div>
    <div className="bg-gray-100 p-4 md:p-8 rounded-md w-full md:w-3/4 lg:w-5/6 mx-auto">
       
      <div className="flex flex-col md:flex-row text-white">
        {/* Left Section */}
        <div className="md:w-1/2 mr-4 mb-4 md:mb-0">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <div className="md:flex">
            <img
              src={imageUrl}
              alt="Course"
              className="w-64 h-auto md:w-80 md:h-auto rounded-none md:rounded-md mr-4 hidden md:block"
            />
            
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-2">Course Description</h1>
          <p>{description}</p>
          <div className="flex items-center mb-2">
                <img src={iconMap.weeks} alt="Weeks Icon" className="w-6 h-6 mr-2" />
                <span className="mr-4">{weeks} Weeks</span>
                <img src={iconMap.people} alt="People Icon" className="w-6 h-6 mr-2" />
                <span className="mr-4">{registeredPeople} Registered</span>
                <img src={iconMap.rating} alt="Rating Icon" className="w-6 h-6 mr-2" />
                <span>Rating: {rating}</span>
              </div>
              <div className="flex items-center">
                <span className="bg-yellow-400 px-1 py-1 inline-block rounded-md mb-2 md:mb-0 md:mr-4">
                  Price: ₹{price}
                </span>
              </div>
              <button className="bg-blue-500 text-white py-3 px-8 text-[12px] rounded-md md:rounded mt-4 transition-colors hover:bg-blue-700 hover:text-white hover:cursor-pointer">
            Enroll Now
            </button>

          {/* Add other course details here */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default AECourseTitle;
