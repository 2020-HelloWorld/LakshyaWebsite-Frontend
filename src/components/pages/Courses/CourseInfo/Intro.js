import React from 'react';
import banner from "../../../../static/design/eventbanner.svg";


const Intro = () => {
  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden text-center text-xl text-gray-200 font-oxygen">
      <div className="relative bg-lavender flex flex-col md:flex-row items-center mx-auto w-10/12 md:w-full max-w-screen-xl h-auto py-4 px-6 md:px-12 md:py-1 text-center rounded-lg my-16">
        <div className="w-full md:w-[30%] hidden md:block">
          <img className="w-full" src={banner} alt="Image" />
        </div>
        <div className="w-full md:w-[70%] mt-12 md:mt-0 md:ml-10">
          <h2 className="font-semibold text-[40px]">Courses</h2>
          <p className="text-[30px] mt-4">Practice and get hired</p>
        </div>
      </div>
      <div className="w-full md:w-[70%] mx-auto mt-6">
        <h2 className="font-semibold text-[40px]">Course Details</h2>
        <p className="text-[18px] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra
          dolor eget felis pretium, vel elementum libero fermentum. Donec vel
          tortor sed felis auctor varius. Vestibulum egestas tellus vitae odio
          congue, in tincidunt ligula fringilla.
        </p>
      </div>
      <div className="w-full md:w-[70%] mx-auto mt-12">
        <h2 className="font-semibold text-[40px]">Top Companies</h2>
        <p className="text-[18px] mt-4">
         Vestibulum egestas tellus vitae odio
        congue, in tincidunt ligula fringilla.
        </p>
        <div className="flex justify-center mt-4">
          <img className="w-1/4 md:w-1/6 mx-4" src='./image1' alt="Company 1" />
          <img className="w-1/4 md:w-1/6 mx-4" src='./image2' alt="Company 2" />
          <img className="w-1/4 md:w-1/6 mx-4" src='./image3' alt="Company 3" />
          <img className="w-1/4 md:w-1/6 mx-4" src='./image4' alt="Company 4" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
