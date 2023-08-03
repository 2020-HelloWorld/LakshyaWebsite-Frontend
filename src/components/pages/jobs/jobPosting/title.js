import React from 'react';

const Title = () => {
  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden text-left text-xl text-gray-200 font-oxygen">
      <div className="bg-white py-4 text-center"></div>
      <div className="relative bg-lavender flex flex-col md:flex-row items-center justify-center mx-auto max-w-4xl h-auto py-4 px-6 md:px-12 md:py-6 text-center rounded-lg">
        <div className="w-full md:w-[70%]">
          <h2 className="font-semibold text-[40px]">Post a Job</h2>
        </div>
      </div>
    </div>
  );
};

export default Title;
