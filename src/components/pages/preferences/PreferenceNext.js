import React, { useState } from 'react';

const buttonLists = [
  ["Jobs +", "Internships +"],
];

const jobLists = [
  ["Software Engineer +", "Product Manager +", "Data Analyst +"],
  ["Marketing Intern +", "Graphic Design Intern +", "Research Intern +"],
];

const PreferenceNext = () => {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (buttonName) => {
    if (selectedButtons.includes(buttonName)) {
      setSelectedButtons(selectedButtons.filter((name) => name !== buttonName));
    } else {
      setSelectedButtons([...selectedButtons, buttonName]);
    }
  };

  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden text-left text-xl text-dimgray font-inter">
      <div className="absolute top-[8%] left-[38%] right-[10%] text-[3vw] font-semibold font-general-sans text-black mt-0">
        Your preferences
      </div>
      <div className="absolute top-[14%] left-[26%] right-[0%] text-[2vw] font-oxygen text-black">
        Help us match you with the best career opportunities
      </div>
      
      <div className="absolute top-[30%] left-[10%] w-[80%] h-[70%] overflow-y-auto">
        {/* Increased the height and adjusted the top position */}
        <div className="bg-white rounded-sm border-[1px] border-solid border-black p-6">
          <div className="text-3xl text-black mb-6">Currently looking for</div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
            {buttonLists.map((buttonList, index) => (
              <React.Fragment key={index}>
                {buttonList.map((buttonName, buttonIndex) => (
                  <button
                    key={buttonIndex}
                    className={`rounded-51xl overflow-hidden flex flex-row py-2 px-3 items-center justify-center border-[1px] border-solid border-darkgray bg-${selectedButtons.includes(buttonName) ? 'blue-600' : 'gray-50'} text-base`}
                    onClick={() => handleButtonClick(buttonName)}
                  >
                    {buttonName.replace('+', selectedButtons.includes(buttonName) ? 'x' : '+')}
                  </button>
                ))}
              </React.Fragment>
            ))}
          </div>
          
          <div className="text-3xl text-black mt-6">Popular career interests</div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
            {jobLists.map((jobList, index) => (
              <React.Fragment key={index}>
                {jobList.map((jobName, jobIndex) => (
                  <button
                    key={jobIndex}
                    className={`rounded-51xl overflow-hidden flex flex-row py-2 px-3 items-center justify-center border-[1px] border-solid border-darkgray bg-${selectedButtons.includes(jobName) ? 'blue-600' : 'gray-50'} text-base`}
                    onClick={() => handleButtonClick(jobName)}
                  >
                    {jobName.replace('+', selectedButtons.includes(jobName) ? 'x' : '+')}
                  </button>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      
      <button className="absolute bottom-[10%] right-[10%] bg-blue-500 text-white px-7 py-4 text-xl md:text-2xl lg:text-3xl">
        Find
      </button>
    </div>
  );
};

export default PreferenceNext;
