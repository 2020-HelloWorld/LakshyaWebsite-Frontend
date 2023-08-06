import React from 'react';
import stanford from '../../../../static/design/stanford.png';
import berklee from '../../../../static/design/berklee.png';
import clark from '../../../../static/design/clark.png';
import mit from '../../../../static/design/mit.png';
const Universities = () => {
  return (
    <section>
      <div className="p-8 md:p-16 lg:p-24 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8" style={{fontSize: '2rem'}}>Our University Partners</h1>
        <div className="flex justify-center">
          <img src={stanford} alt="stanford" className="w-24 md:w-36 lg:w-48 m-4" />
          <img src={berklee} alt="berklee" className="w-24 md:w-36 lg:w-48 m-4" />
          <img src={clark} alt="clark" className="w-24 md:w-36 lg:w-48 m-4" />
          <img src={mit} alt="mit" className="w-24 md:w-36 lg:w-48 m-4" />
        </div>
      </div>
    </section>
  );
};

export default Universities;
