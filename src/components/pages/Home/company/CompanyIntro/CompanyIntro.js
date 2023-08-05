import React from 'react';
import introimg from '../../../../../static/design/Group.svg';

const Front = () => {
  return (
    <section className="bg-gray-100">
      <div className="p-8 md:p-16 lg:p-24 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mt-8 md:mt-0"> {/* Added mt-8 for top margin on medium screens */}
          <div>
            <h1 style={{ fontSize: '3rem' }} className="text-white text-4xl md:text-5xl lg:text-6xl font-oxygen leading-tight">
              Companies
            </h1>
          </div>
          <div className="mb-16">
            <span className="text-white text-lg font-oxygen md:text-lg lg:text-lg leading-7">
              Lorem ipsum dolor sit amet correctour.Lectus diam eleifend nulla est sit vulputate. Adispicing
              curabitur felis elit rhoncus malesuda massa morbi nulla.
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

export default Front;
