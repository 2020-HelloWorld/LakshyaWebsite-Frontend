import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import topimg1 from '../../../static/logo/topimg1.svg'
import topimg2 from '../../../static/logo/topimg2.svg'
import topimg3 from '../../../static/logo/topimg3.svg'

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="mt-12">
      {/* Lakshya Text */}
      <b className="absolute top-0 left-0 text-[24px] font-general-sans text-cornflowerblue ml-4 mt-4">
        Lakshya
      </b>
      <div className="absolute top-0 right-0 flex gap-4 mt-4 mr-4">
        <img className="w-6 h-6" alt="topimg1" src={topimg1} />
        <img className="w-6 h-6" alt="topimg2" src={topimg2} />
        <img className="w-6 h-6" alt="topimg3" src={topimg3} />
      </div>

      {/* Header */}
      <div className="bg-gray-100 text-white">
        <div className="mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Mobile Dropdown Button */}
            <div className="md:hidden">
              <button
                onClick={toggleDropdown}
                className="bg-lightsteelblue hover:bg-white py-2 px-4 text-black font-semibold rounded-lg text-[20px]"
              >
                Menu
              </button>
            </div>

            {/* Normal Navbar */}
            <div className={`hidden md:flex flex-wrap md:flex-nowrap items-center`}>
              <Link to='/about'>
              <button className="hover:bg-black bg-gray-100 py-2 px-4 text-white font-semibold">
                About Us
              </button>
              </Link>
              <Link to='/event/list'>
              <button className="hover:bg-black bg-gray-100 py-2 px-4 text-white font-semibold">
                Events
              </button>
              </Link>
              <Link to='/job/list'>
              <button className="hover:bg-black bg-gray-100 py-2 px-4 text-white font-semibold">
                Jobs
              </button>
              </Link>
              <Link to='/course/list'>
              <button className="hover:bg-black bg-gray-100 py-2 px-4 text-white font-semibold">
                Courses
              </button>
              </Link>
              <Link to='/internship/list'>
              <button className="hover:bg-black bg-gray-100 py-2 px-4 text-white font-semibold">
                Internships
              </button>
              </Link>
             
              <button className="hover:bg-black bg-gray-100 py-2 px-4 text-white font-semibold">
                Abroad Education
              </button>
              
              <Link to='/mentor/find'>
              <button className="hover:bg-black bg-gray-100 py-2 px-4 text-white font-semibold">
                Find A Mentor
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isDropdownOpen && (
        <div className="md:hidden bg-gray-100">
           <Link to='/about'>
          <button className="hover:bg-black bg-gray-100 py-2 px-4 text-white font-semibold text-[16px] w-full text-left">
            About Us
          </button>
          </Link>
          <Link to='/event/list'>
          <button className="hover:bg-black bg-gray-100 py-2 px-4 text-white font-semibold w-full text-[16px] text-left">
            Events
          </button>
          </Link>
          <Link to='/job/list'>
          <button className="hover:bg-black bg-gray-100 py-2 px-4 text-white font-semibold w-full text-[16px] text-left">
            Jobs
          </button>
          </Link>
          <Link to='/course/list'>
          <button className="hover:bg-black bg-gray-100 py-2 px-4 text-white font-semibold w-full text-[16px] text-left">
            Courses
          </button>
          </Link>
          <Link to='/internship/list'>
          <button className="hover:bg-black bg-gray-100 py-2 px-4 text-white font-semibold w-full text-[16px] text-left">
            Internships
          </button>
          </Link>
          <button className="hover:bg-black bg-gray-100 py-2 px-4 text-white font-semibold w-full text-[16px] text-left">
            Abroad Education
          </button>
          <Link to='/mentor/find'>
          <button className="hover:bg-black bg-gray-100 py-2 px-4 text-white font-semibold w-full text-[16px] text-left">
            Find A Mentor
          </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
