import React from 'react';
import introimg from '../../../../static/design/Intro.png';

{/* Initial Introduction screen */}

const introscreen = () => {
  return (
    <section className="bg-gray-100">
      <div className="p-8 md:p-16 lg:p-24 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <div>
            <h1  style={{ fontSize: '3rem' }} className="text-white text-4x1 md:text-5x1 lg:text-6x1 font-oxygen leading-tight mb-2">
              Empowering Women,
            </h1>
            <h1    style={{ fontSize: '3rem' }} className="text-white text-4x1 md:text-4x1 lg:text-5x1 font-oxygen leading-tight mb-2">
              Shaping Careers,
            </h1>
            <h1  style={{ fontSize: '3rem' }} className="text-white text-4x1 md:text-4x1 lg:text-5x1 font-oxygen leading-tight mb-2">
              Building Future
            </h1>
          </div>
          <div>
            <span className="text-white text-2xl font-oxygen md:text-lg lg:text-xl leading-7">
              Unlocking Potential, Inspiring Careers: Empowering Women to Thrive in the Workforce and Beyond
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="hidden md:block pl-10">
            <img src={introimg} alt="" className="max-w-full w-110 h-96 rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default introscreen;

