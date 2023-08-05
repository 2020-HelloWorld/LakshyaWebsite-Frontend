import React from 'react';
import filter from '../../../../static/logo/filter.png';

const JobFilter = ({
  profile,
  name,
  location,
  fullTime,
  partTime,
  yearsOfExperience,
  salary,
  setProfile,
  setName,
  setFullTime,
  setPartTime,
  setLocation,
  setYearsOfExperience,
  setSalary,
  handleClearAll,
}) => {
  return (
    <div className="flex flex-col w-full md:w-1/4 p-4 border border-gray-500 rounded-lg bg-white mt-4 rounded-2xl box-border min-w-[300px] min-h-[600px] max-h-[600px] overflow-auto text-lg border-[1px] border-solid border-darkgray md:ml-auto md:order-first">
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
        <label className="block mb-1 font-oxygen">Profile</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-2 py-2 w-5/6 font-oxygen"
          
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-oxygen">Company Name</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-2 py-2 w-5/6 font-oxygen"
          value={name}
          placeholder="e.g. Cisco"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2 h-5 w-5"
            checked={fullTime}
            onChange={(e) => setFullTime(e.target.checked)}
          />
          FULL TIME
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2 h-5 w-5"
            checked={partTime}
            onChange={(e) => setPartTime(e.target.checked)}
          />
          PART TIME
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-oxygen">Years of experience</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-2 py-2 w-5/6 font-oxygen"
          placeholder="e.g. Engineer"
          value={yearsOfExperience}
          onChange={(e) => setYearsOfExperience(e.target.value)}
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
      <div className="mb-4">
        <label className="block mb-1 font-oxygen">Salary</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-2 py-2 w-5/6 font-oxygen"
          placeholder="e.g.4 lpa"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </div>
    </div>
  );
};

export default JobFilter;
