import React from 'react';
import calendar from "../../../../static/logo/calendar.svg";
import location from "../../../../static/logo/location.svg";
import stipend from "../../../../static/logo/stipend.svg";
import trend from '../../../../static/logo/trend2.svg';
import internshipcompanyimg1 from '../../../../static/design/internshipcompanyimg1.svg'

const internships = [
  {
    id: 1,
    internshipName: 'Internship 1',
    location: 'City 1',
    stipend: '₹ 6000/month',
    image: internshipcompanyimg1,
    duration: '4 months',
  },
  {
    id: 2,
    internshipName: 'Internship 2',
    location: 'City 2',
    stipend: '₹ 4000/month',
    image: internshipcompanyimg1,
    duration: '2 months',
  },
  {
    id: 3,
    internshipName: 'Internship 3',
    location: 'City 3',
    stipend: '₹ 5000/month',
    image: internshipcompanyimg1,
    duration: '3 months',
  },
  {
    id: 4,
    internshipName: 'Internship 4',
    location: 'City 4',
    stipend: '₹ 7000/month',
    image: internshipcompanyimg1,
    duration: '6 months',
  },
  {
    id: 5,
    internshipName: 'Internship 5',
    location: 'City 5',
    stipend: '₹ 9000/month',
    image: internshipcompanyimg1,
    duration: '10 months',
  },
  {
    id: 6,
    internshipName: 'Internship 6',
    location: 'City 6',
    stipend: '₹ 2000/month',
    image: internshipcompanyimg1,
    duration: '1 months',
  },
  {
    id: 7,
    internshipName: 'Internship 7',
    location: 'City 7',
    stipend: '₹ 7000/month',
    image: internshipcompanyimg1,
    duration: '6 months',
  },
  // Add more internship data
];

const InternshipBoxes=()=> {
  return (
    <>
      <div className="text-center py-8 mt-8 text-[32px] font-bold">Upcoming Internships</div>
      <div className="bg-gray-100 h-full flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl p-8 m-8">
          {internships.map(internship => (
            <div key={internship.id} className="bg-white m-4 w-[200px] rounded-lg p-6 shadow-md relative">
              
              <div className="absolute left-0 top-0 ml-6 mt-6 mb-8 z-10 flex flex-row items-center gap-2 py-1 px-2 border-[1.1px] border-solid border-deepskyblue bg-white text-black text-lg md:text-sm">
                <img className="w-4 h-4" alt="trend" src={trend} />
                <div>Actively hiring</div>
              </div>
  
              <div className="flex">
                <h2 className="text-xl font-semibold mt-12 mb-4">{internship.internshipName}</h2>
                <div className="mt-12 ml-auto">
                  <img src={internship.image} alt={internship.internshipName} className="w-9 h-9 mr-4 mb-3" />
                </div>
              </div>

              <p className="text-gray-600 flex items-center">
                <img className="w-6 h-6 mr-1" src={location} alt="Location Icon" />
                {internship.location}
              </p>

              <p className="text-gray-600 font-medium mt-2 flex items-center">
                <img className="w-6 h-6 mr-1" src={stipend} alt="Stipend Icon" />
                {internship.stipend}
              </p>

              <p className="text-sm text-gray-500 mt-2 flex items-center">
                <img className="w-6 h-6 mr-1" src={calendar} alt="Calendar Icon" />
                {internship.duration}
              </p>
  
              <button className="text-deepskyblue mt-2 text-md font-oxygen font-semibold hover:underline bg-white">{`View Details >`}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  
}

export default InternshipBoxes;
