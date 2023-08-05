import React from 'react';
import dashboard from '../../../../../static/design/dashboard.svg';

const CompDashBoard = () => {
  return (
    <section className="bg-gray-100 mb-16 md:mb-16 h-[505px]">
      <div className="p-8 md:p-16 lg:p-24 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div>
            <h1 style={{ fontSize: '3rem' }} className="text-white text-4xl md:text-5xl lg:text-6xl font-oxygen leading-tight">
              DashBoard
            </h1>
          </div>
          <div className="mb-6 md:mb-16">
            <span className="text-white text-lg font-oxygen md:text-lg lg:text-lg leading-7">
              A feature where you can access and manage all your company details.
            </span>
          </div>
          <div className="flex justify-center md:justify-start"> 
            <button
              className="bg-white text-gray-100 text-lg py-3 px-8 rounded-full font-oxygen font-bold hover:bg-cornflowerblue hover:text-white transition-colors"
            >
              View DashBoard
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="hidden md:block pl-10">
            <img src={dashboard} alt="" className="max-w-full w-110 h-96 rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompDashBoard;
