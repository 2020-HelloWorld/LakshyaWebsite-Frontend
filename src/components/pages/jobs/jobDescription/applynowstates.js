import React, { useState } from 'react';
import ApplyNowProps from './applynowprops';

const ApplyNowStates = () => {
  const [companyName, setCompanyName] = useState('Siemens');
  const [startDate, setStartDate] = useState('01-08-2023');
  const [duration, setDuration] = useState('6 months');
  const [ctc, setCtc] = useState('Rs 5000/month');
  const [aboutCompany, setAboutCompany] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  const [aboutJob, setAboutJob] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  const [skillsRequired, setSkillsRequired] = useState('React, JavaScript, HTML, CSS, MongoDB');//make sure to give space between the skills, else it will end up in the same box.
  const [whoCanApply, setWhoCanApply] = useState('Students pursuing a degree in Computer Science, Graduates');
  const [postedTime, setPostedTime] = useState('Posted Few Hours Ago');
  const [numberofhiring,setNumberofhiring] = useState('18');
  const [hiringsince,setHiringsince] = useState('2010');
  const [numberofopportunities,setNumberofopportunities] = useState('120');
  const [perks, setPerks]=useState('Holiday on Weekends, Sick leave');
  const [numberofopenings, setNumberofopenings]=useState('20');


  return (
    <div>
      {/* Other content */}
      <ApplyNowProps
        companyName={companyName}
        startDate={startDate}
        duration={duration}
        ctc={ctc}
        aboutCompany={aboutCompany}
        aboutJob={aboutJob}
        skillsRequired={skillsRequired}
        whoCanApply={whoCanApply}
        postedTime={postedTime}
        numberofhiring={numberofhiring}
        hiringsince={hiringsince}
        numberofopportunities={numberofopportunities}
        perks={perks}
        numberofopenings={numberofopenings}
      />
    </div>
  );
};

export default ApplyNowStates;
