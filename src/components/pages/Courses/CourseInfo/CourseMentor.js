import React from 'react';
import cimage from "../../../../static/design/companylogin.png"
const mentorsData = [
  {
    id: 1,
    name: 'Mentor 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: cimage, 
  },
  {
    id: 2,
    name: 'Mentor 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'mentor2.jpg', 
  },
  {
    id: 3,
    name: 'Mentor 3',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'mentor3.jpg', 
  },
  {
    id: 4,
    name: 'Mentor 4',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'mentor4.jpg', 
  },
  // Add more mentors to this list as needed
];

const CourseMentor = () => {
  return (
    <div className="p-4">
      <h1 className="text-[40px] font-oxygen mb-4 text-center">Meet Our Mentors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16">
        {mentorsData.map((mentor) => (
          <div
            key={mentor.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl mb-4"
          >
            <img
              src={mentor.imageUrl}
              alt={`Mentor ${mentor.id}`}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-[24px] font-semibold mb-2">{mentor.name}</h3>
            <p className="text-gray-600 text-[20px]">{mentor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseMentor;
