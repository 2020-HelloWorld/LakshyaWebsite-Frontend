import React, { useState } from 'react';
import MentorFilter from './MentorFilter';
import banner from "../../../static/design/mentoruser.svg";
import follow from '../../../static/logo/followers.svg';
import building from '../../../static/logo/building.svg';
import bcase from '../../../static/logo/briefcase.svg';
import loc from '../../../static/logo/location.svg'


const MentorList = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [company, setCompany] = useState('');
  const [follower, setFollow] = useState('');

  const mentorDetails = [
    {
      name: 'Mentor Name',
      description:
        'Lorem ipsum dolor eit amet consectur. Lectus diam eleifiend nulla est sit vulpate.',
      location: 'Bangalore',
      company: 'CISCO SYSTEM',
      role: 'CEO/ Founder',
      followers: '394 followers',
      image: "./image",
    },
    // Add more mentor details objects as needed
  ];

  const logos = [
    
    {
      alt: 'Followers Logo',
      src: follow,
    },
    {
      alt: 'Briefcase Logo',
      src: bcase,
    },
    {
      alt: 'Building Logo',
      src: building,
    },
    {
      alt: 'Location Logo',
      src: loc,
    },
    // Add more logo objects as needed
  ];

  const filteredMentors = mentorDetails.filter((mentor) => {
    // Apply filtering logic based on the selected filters
    return (
      mentor.name.toLowerCase().includes(name.toLowerCase()) &&
      mentor.location.toLowerCase().includes(location.toLowerCase()) &&
      mentor.company.toLowerCase().includes(company.toLowerCase())&&
      (follower ? mentor.followers.toLowerCase().includes(follower.toLowerCase()) : true)
    );
  });

  const handleClearAll = () => {
    setName('');
    setLocation('');
    setCompany('');
    setFollow('');
    
  };

  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden text-left text-xl text-gray-200 font-oxygen">
       
        <div className="relative bg-lavender flex flex-col md:flex-row items-start md:items-center mx-auto w-10/12 md:w-full max-w-screen-xl h-auto py-4 px-6 md:px-12 md:py-1 text-left rounded-lg my-16">
        <div className="w-full md:w-[30%] hidden md:block">
          <img className="w-full" src={banner} alt="Image" />
        </div>
        <div className="w-full md:w-[70%] ml-10 mb-12">
          <h2 className="font-semibold text-[40px] mt-12">Find A Mentor</h2>
          <p className="text-[30px]">All the upcoming events will be displayed here</p>
        </div>
      </div>
    <div className="flex flex-col md:flex-row p-8 min-w-[300px] min-h-[600px]">
      <MentorFilter
        name={name}
        location={location}
        company={company}
        follower={follower}
        setName={setName}
        setCompany={setCompany}
        setLocation={setLocation}
        setFollow={setFollow}
        handleClearAll={handleClearAll}
      />
      <div className="w-full md:w-3/4">
        {filteredMentors.length > 0 ? (
          filteredMentors.map((mentor, index) => (
            <div
              key={index}
              className="relative rounded-lg w-full md:w-[800px] h-[420px] overflow-hidden text-sm border-[1px] border-solid border-darkgray mx-auto md:ml-auto my-4"
            >
              {/* Hide the image in small screens */}
              <img
                className="absolute top-[10%] left-[3%] w-[200px] h-[200px] object-cover hidden md:block"
                alt=""
                src={mentor.image}
              />

              <div className="absolute top-[15%] left-[30%]">
                <b className="text-4xl md:text-13xl">{mentor.name}</b>
                <p className="text-lg text-black-200 mt-4">{mentor.description}</p>

                <div className="flex flex-col items-start gap-2 text-dimgray-200 mt-4">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-6 h-6 overflow-hidden shrink-0"
                      alt={logos[3].alt}
                      src={logos[3].src}
                    />
                    <b>{mentor.location}</b>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-6 h-6 overflow-hidden shrink-0"
                      alt={logos[2].alt}
                      src={logos[2].src}
                    />
                    <b>{mentor.company}</b>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-6 h-6 overflow-hidden shrink-0"
                      alt={logos[1].alt}
                      src={logos[1].src}
                    />
                    <b>{mentor.role}</b>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-6 h-6 overflow-hidden shrink-0"
                      alt={logos[0].alt}
                      src={logos[0].src}
                    />
                    <b>{mentor.followers}</b>
                  </div>
                </div>
              </div>
             
              <hr className="absolute top-[394px] left-[72px] w-full border-gray-300" />

              <button className="absolute bottom-8  right-8 md:top-[330px] md:right-8 bg-deepskyblue h-14 flex flex-row py-4 px-[18px] box-border items-center justify-center text-xl text-white hover:bg-cornflowerblue rounded-md">
                <b className="relative">Follow</b>
              </button>
            </div>
          ))
        ) : (
          <p>No mentors found matching the filters.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default MentorList;
