import search from '../../../static/logo/search.png';
import React, { useState } from 'react';

const buttonLists = [
  ["Data Entry", "Digital Marketing", "Web Development", "Marketing/Sales", "Human Resources"],
  ["Software Development", "General Management", "Social Media Marketing", "Project Management"]
];

const PreferenceIntro = () => {
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handlePreferenceClick = (preference) => {
    setSelectedPreferences((prevPreferences) => [...prevPreferences, preference]);
  };

  const handleSelectedPreferenceClick = (preference) => {
    setSelectedPreferences((prevPreferences) =>
      prevPreferences.filter((prevPreference) => prevPreference !== preference)
    );
  };

  const filteredList = buttonLists
    .flat()
    .filter(
      (buttonName) =>
        buttonName.toLowerCase().includes(searchInput.toLowerCase()) &&
        !selectedPreferences.includes(buttonName)
    );

  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden text-left text-xl text-dimgray font-inter">
      <div className="absolute top-[8%] left-[38%] right-[10%] text-[3vw] font-semibold font-general-sans text-black mt-0">
        Your preferences
      </div>
      <div className="absolute top-[14%] left-[26%] right-[0%] text-[2vw] font-oxygen text-black">
        Help us match you with the best career opportunities
      </div>

      <div className="absolute top-[30%] left-[10%] w-[80%] h-[60%] overflow-y-auto">
        <div className="bg-white rounded-sm border-[1px] border-solid border-black p-6">
          <div className="text-3xl text-black mb-6">Area(s) of interest</div>
          <div className="flex flex-row items-center justify-start gap-[3px] border-[1px] border-solid border-darkgray rounded-md p-2">
            <img className="w-7 h-7" alt="" src={search} />
            <input
              type="search"
              className="whitespace-nowrap overflow-hidden overflow-ellipsis outline-none w-full md:w-[800px] h-[40px] border-none bg-transparent"
              placeholder="Area you want to work in or learn about"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          {selectedPreferences.length > 0 && (
            <div>
              <div className="text-3xl text-black mt-6">Your preferences</div>
              <div className="flex flex-wrap mt-4">
                {selectedPreferences.map((preference, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-gray-400 py-1 px-2 text-sm text-gray-700 mr-2 mb-2 cursor-pointer"
                    onClick={() => handleSelectedPreferenceClick(preference)}
                  >
                    {preference} <span className="ml-1">x</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="text-3xl text-black mt-6">Popular career interests</div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
            {filteredList.map((buttonName, index) => (
              <button
                key={index}
                className="rounded-51xl overflow-hidden flex flex-row py-2 px-3 items-center justify-center border-[1px] border-solid border-darkgray bg-gray-50 text-base"
                onClick={() => handlePreferenceClick(buttonName)}
              >
                {buttonName} +
              </button>
            ))}
          </div>
        </div>
      </div>
      <button className="absolute bottom-[1%] right-[10%] bg-blue-500 text-white px-7 py-4 text-xl md:text-2xl lg:text-3xl">
        Find
      </button>
    </div>
  );
};

export default PreferenceIntro;
