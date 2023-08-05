import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 
import mentorimg1 from '../../../../../static/design/mentoronboard1.png'

import MentorCard from './onboardCard'

const mentors = [
  {
    id: 1,
    name:'Mentor 1',
    content:'Lorem Ipsum Dolor',
    image:mentorimg1
  },
  {
    id: 2,
    name:'Mentor 2',
    content:'Lorem Ipsum Dolor',
    image: mentorimg1
  },
  {
    id: 3,
    name:'Mentor 3',
    content:'Lorem Ipsum Dolor',
    image:mentorimg1
  },
  {
    id: 4,
    name:'Mentor 4',
    content:'Lorem Ipsum Dolor',
    image:mentorimg1
  },
  {
    id: 5,
    name:'Mentor 5',
    content:'Lorem Ipsum Dolor',
    image:mentorimg1
  },
  {
    id: 6,
    name:'Mentor 6',
    content:'Lorem Ipsum Dolor',
    image:mentorimg1
  },
  {
    id: 7,
    name:'Mentor 7',
    content:'Lorem Ipsum Dolor',
    image:mentorimg1
  },
  {
    id: 8,
    name:'Mentor 8',
    content:'Lorem Ipsum Dolor',
    image:mentorimg1
  },
  
];

const OnboardCarousel = () => {
  const [mentorsData, setMentorsData] = useState(mentors);

  const scrollLeft = () => {
    document.getElementById('content').scrollLeft -= 400;
  };

  const scrollRight = () => {
    document.getElementById('content').scrollLeft += 400;
  };

  return (
    <div className="relative bg-gray-100 mb-16">
      <div className="text-center py-8 mt-8 text-[32px] font-oxygen font-semibold text-white">Mentors On Board With Us</div>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <button
          onClick={scrollLeft}
          className="p-3 rounded-full text-black bg-slate-400 hover:bg-slate-200"
        >
          <FiChevronLeft />
        </button>
      </div>

      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button
          onClick={scrollRight}
          className="p-3 rounded-full text-black bg-slate-400 hover:bg-slate-200"
        >
          <FiChevronRight />
        </button>
      </div>

      <div
        id="content"
        className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {mentorsData.map((mentor) => (
          <div key={mentor.id} className="mr-4">
            <MentorCard mentor={mentor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnboardCarousel;
