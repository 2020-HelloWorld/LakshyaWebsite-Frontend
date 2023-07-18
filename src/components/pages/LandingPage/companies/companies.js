import React from 'react';
import stanford from '../../../../static/design/stanford.png';
import microsoft from '../../../../static/design/microsoft.png';
import intel from '../../../../static/design/intel.png';
import infosis from '../../../../static/design/infosis.png';

const Companies = () => {
  return (
    <section>
      <div className="p-8 md:p-16 lg:p-24 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8" style={{fontSize: '2rem'}}>Companies</h1>
        <div className="flex justify-center">
          <img src={stanford} alt="stanford" className="w-24 md:w-36 lg:w-48 m-4" />
          <img src={microsoft} alt="microsoft" className="w-24 md:w-36 lg:w-48 m-4" />
          <img src={intel} alt="infosis" className="w-24 md:w-36 lg:w-48 m-4" />
          <img src={infosis} alt="intel" className="w-24 md:w-36 lg:w-48 m-4" />
        </div>
      </div>
    </section>
  );
};

export default Companies;
