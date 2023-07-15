import React from 'react';
import filter from '../../../static/logo/filter.png';

const Filter = ({
  profile,
  location,
  workFromHome,
  partTime,
  minStipend,
  showAdditionalFilters,
  setProfile,
  setLocation,
  setWorkFromHome,
  setPartTime,
  setMinStipend,
  setShowAdditionalFilters,
  handleClearAll,
}) => {
  return (
    <div className="flex flex-col w-full md:w-1/4 p-4 border border-gray-500 rounded-lg bg-white mt-4 rounded-2xl box-border min-w-[300px] min-h-[600px] overflow-auto text-lg border-[1px] border-solid border-darkgray md:ml-auto md:order-first">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img className="mr-2 w-4 h-4" src={filter} alt="Filter Icon" />
          <h2 className="text-lg font-oxygen mb-4">FILTERS</h2>
        </div>
        <button className="text-sm text-blue-500  ml-auto bg-white" onClick={handleClearAll}>
          Clear all
        </button>
      </div>
      <div className="mb-4">
        <input type="checkbox" className="mr-2 h-5 w-5" />
        <span className="font-oxygen text-sm">
          As per my <span className="text-blue-500">preferences</span>
        </span>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-oxygen">Profile</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-2 py-2 w-5/6 font-oxygen"
          placeholder="e.g. Engineer"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-oxygen">Company Name</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-2 py-2 w-5/6 font-oxygen"
          value={location}
          placeholder="e.g. Cisco"
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2 h-5 w-5"
            checked={workFromHome}
            onChange={(e) => setWorkFromHome(e.target.checked)}
          />
          Work from Home
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2 h-5 w-5"
            checked={partTime}
            onChange={(e) => setPartTime(e.target.checked)}
          />
          Part-time
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-oxygen">Minimum Stipend</label>
        <input
          type="range"
          className="block w-5/6 appearance-none h-2 bg-cornflowerblue rounded-lg"
          min={0}
          max={10000}
          value={minStipend}
          onChange={(e) => setMinStipend(parseInt(e.target.value))}
        />
        <div className="flex justify-between">
          <span>Rs.0</span>
          <span>Rs.10,000</span>
        </div>
      </div>
      {showAdditionalFilters ? (
        <>
          {/* Additional text filters */}
          <div className="mb-4">
            <label className="block mb-1 font-oxygen">Additional Filter 1</label>
            <input
              type="text"
              className="border border-gray-300 rounded px-2 py-1 w-5/6"
              placeholder="e.g."
              value={''}
              onChange={() => {}}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-oxygen">Additional Filter 2</label>
            <input
              type="text"
              className="border border-gray-300 rounded px-2 py-1 w-5/6"
              placeholder="e.g."
              value={''}
              onChange={() => {}}
            />
          </div>

          {/* Additional checkboxes */}
          <div className="mb-4">
            <label className="block mb-2 font-oxygen">Additional Options</label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 h-5 w-5"
                checked={false}
                onChange={() => {}}
              />
              Option 1
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 h-5 w-5"
                checked={false}
                onChange={() => {}}
              />
              Option 2
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 h-5 w-5"
                checked={false}
                onChange={() => {}}
              />
              Option 3
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 h-5 w-5"
                checked={false}
                onChange={() => {}}
              />
              Option 4
            </label>
          </div>

          {/* Hide additional filters */}
          <button
            className="text-blue-500 bg-white mt-auto"
            onClick={() => setShowAdditionalFilters(false)}
          >
            Hide additional filters
          </button>
        </>
      ) : (
        // Show additional filters button
        <button
          className="text-blue-500 bg-white mt-auto"
          onClick={() => setShowAdditionalFilters(true)}
        >
          View more filters
        </button>
      )}
    </div>
  );
};

export default Filter;
