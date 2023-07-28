import React from 'react';
import photo from '../../../static/design/hema_photo.png';

const Founder = () => {
  return (
    <div className="bg-gray-100 w-full h-[500px] flex items-center justify-center">
      <div className="flex flex-col items-start w-full md:max-w-[600px] mx-4 md:mx-auto text-white">
  <div className="text-[38px] md:text-5xl font-general-sans md:text-[40px] sm:text-[48px]">Founder</div>
  <div className="text-[20px] mt-4">
    Hema Shantharam, PMP® hails from Bangalore. A Computer Science Engineer by qualification from PESIT, she also has two Management degrees under her belt - MPWE from IIM Bangalore and EGPM from IIM Lucknow, W3C program from IIM Kashipur. Apart from being an entrepreneur and a Startup mentor, Hema is also a Reiki Practitioner, Certified Yoga teacher, and specializing in Yoga for Diabetes Management.
  </div>
</div>

      <div className="w-full md:w-1/3 mt-4 md:mt-0 md:ml-4">
          <div className="w-[150px] h-[150px] object-cover ml-auto mx-[80px] sm:w-[300px] sm:h-[300px]">
            <img className="w-full h-full" alt="Image" src={photo} />
          </div>
        </div>
    </div>

    
  );
};

export default Founder;