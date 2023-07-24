import React from 'react';
import filter from '../../../static/logo/filter.png';

const MentorFilter = ({
  
  name,
  company,
  location,
  follower,
  setName,
  setCompany,
  setLocation,
 setFollow,
 handleClearAll,
}) => {
  return (
    <div className="flex flex-col w-full md:w-1/4 p-4 border border-gray-500 rounded-lg bg-white mt-4 rounded-2xl box-border min-w-[300px] min-h-[500px] max-h-[500px] overflow-auto text-lg border-[1px] border-solid border-darkgray md:ml-auto md:order-first">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img className="mr-2 w-4 h-4" src={filter} alt="Filter Icon" />
          <h2 className="text-lg font-oxygen mb-4">FILTERS</h2>
        </div>
        <button className="text-sm text-blue-500 ml-auto bg-white" onClick={handleClearAll}>
          CLEAR ALL
        </button>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-oxygen">Name</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-2 py-2 w-5/6 font-oxygen"
          placeholder="e.g. Engineer"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-oxygen">Company Name</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-2 py-2 w-5/6 font-oxygen"
          value={company}
          placeholder="e.g. Cisco"
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-1 font-oxygen">Followers</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-2 py-2 w-5/6 font-oxygen"
          placeholder="e.g. 394 followers"
          value={follower}
          onChange={(e) => setFollow(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-oxygen">Location</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-2 py-2 w-5/6 font-oxygen"
          placeholder="e.g. Bangalore"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MentorFilter;
