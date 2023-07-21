import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import axios from 'axios';

import search from '../../../static/logo/search.png';
import home from '../../../static/logo/home.png';
import calendar from '../../../static/logo/calendar.png';
import money from '../../../static/logo/money.png';
import trend from '../../../static/logo/trend.png';
import play from '../../../static/logo/play.png';

const InternJobList = () => {
  const [profile, setProfile] = useState('');
  const [location, setLocation] = useState('');
  const [workFromHome, setWorkFromHome] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [minStipend, setMinStipend] = useState(0);
  const [showAdditionalFilters, setShowAdditionalFilters] = useState(false);
  const [data, setData] = useState(null);

  const jobDetails = [
    {
      title: 'Senior Automation Tester',
      company: 'EPAM Anywhere',
      startDate: 'Immediately',
      duration: '06 Months',
      stipend: '8000 ₹ /Month',
      type: 'Internship',
      isHiring: true,
      isRemote: true,
      image: search,
    },
    {
      title: 'Data Scientist',
      company: 'EPAM Anywhere',
      startDate: 'Immediately',
      duration: '06 Months',
      stipend: '8000 ₹ /Month',
      type: 'Internship',
      isHiring: true,
      isRemote: true,
      image: search,
    },
    // Add more job details objects as needed
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('/internship/list/',{},{
          withCredentials:true,
          headers:{
            "Content-Type" : 'application/json',
          },
        });// Replace with your sample link
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const logos = [
    {
      alt: 'Hiring Logo',
      src: trend,
    },
    {
      alt: 'Work from Home Logo',
      src: home,
    },
    {
      alt: 'Stipend Logo',
      src: money,
    },
    {
      alt: 'Duration Logo',
      src: calendar,
    },
    {
      alt: 'Start Date Logo',
      src: play,
    },
    // Add more logo objects as needed
  ];


  

  const filteredJobs = jobDetails.filter((job) => {
    // Apply filtering logic based on the selected filters
    return (
      job.title.toLowerCase().includes(profile.toLowerCase()) &&
      job.company.toLowerCase().includes(location.toLowerCase()) &&
      (workFromHome ? job.isRemote : true) &&
      (partTime ? job.duration.toLowerCase().includes('part-time') : true) &&
      parseInt(job.stipend.replace(/[^0-9]/g, '')) >= minStipend
    );
  });

  const handleClearAll = () => {
    setProfile('');
    setLocation('');
    setWorkFromHome(false);
    setPartTime(false);
    setMinStipend(0);
  };

  return (
    <div className="flex flex-col md:flex-row p-8 min-w-[300px] min-h-[600px]">
      <Filter
        profile={profile}
        location={location}
        workFromHome={workFromHome}
        partTime={partTime}
        minStipend={minStipend}
        showAdditionalFilters={showAdditionalFilters}
        setProfile={setProfile}
        setLocation={setLocation}
        setWorkFromHome={setWorkFromHome}
        setPartTime={setPartTime}
        setMinStipend={setMinStipend}
        setShowAdditionalFilters={setShowAdditionalFilters}
        handleClearAll={handleClearAll}
      />
      <div className="w-full md:w-3/4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div
              key={index}
              className="relative rounded-lg w-full md:w-[800px] h-[480px] overflow-hidden text-sm border-[1px] border-solid border-darkgray mx-auto md:ml-auto my-4"
            >
              <div
                className={`absolute top-[32px] left-[72px] flex flex-row py-1 px-2 items-center justify-start gap-[10px] ${
                  job.isHiring
                    ? 'text-dimgray-300 border-[1px] border-solid border-deepskyblue-200'
                    : 'text-dimgray-200'
                }`}
              >
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt={logos[0].alt}
                  src={logos[0].src}
                />
                <div className="relative">{job.isHiring ? 'Actively hiring' : ''}</div>
              </div>
              <b className="absolute top-[79px] left-[72px] text-4xl md:text-13xl">
                {job.title}
              </b>
              <b className="absolute top-[130px] left-[50%] -translate-x-1/2 text-lg text-black-200">
                {job.company}
              </b>
              <div className="absolute top-[235px] left-[72px] flex flex-col md:flex-row items-center md:justify-start gap-[8px] text-dimgray-200">
                <div className="flex flex-row items-center gap-[8px]">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt={logos[4].alt}
                    src={logos[4].src}
                  />
                  <b className="relative">{job.startDate}</b>
                </div>
                <div className="flex flex-row items-center gap-[8px]">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt={logos[3].alt}
                    src={logos[3].src}
                  />
                  <b className="relative">{job.duration}</b>
                </div>
                <div className="flex flex-row items-center gap-[8px] md:mt-0 mt-4">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt={logos[2].alt}
                    src={logos[2].src}
                  />
                  <b className="relative">{job.stipend}</b>
                </div>
              </div>
              <div className="absolute top-[350px] left-[72px] rounded-sm bg-gainsboro w-[77px] overflow-hidden flex flex-row py-1.5 px-5 box-border items-center justify-center">
                <div className="relative">{job.type}</div>
              </div>
              <div className="absolute top-[181px] left-[72px] rounded flex flex-row p-[5px] items-center justify-start gap-[12px] text-dimgray-200 border-[1px] border-solid border-darkgray">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt={logos[1].alt}
                  src={logos[1].src}
                />
                <b className="relative">WORK FROM HOME</b>
              </div>
              <hr className="absolute top-[394px] left-[72px] w-full border-gray-300" />
              <button className="absolute bottom-8 left-8 right-[calc(50% + 140px)] md:top-[394px] md:left-[calc(50% + 140px)] text-xl text-deepskyblue bg-white">
                View details
              </button>
              <button className="absolute bottom-8 right-8 md:top-[394px] md:right-8 bg-deepskyblue h-14 flex flex-row py-4 px-[18px] box-border items-center justify-center text-xl text-white">
                <b className="relative">Apply Now</b>
              </button>
              <img
                className="absolute top-[60px] right-[4%] w-[84px] h-[84px] object-cover"
                alt=""
                src={job.image}
              />
            </div>
          ))
        ) : (
          <p>No jobs found matching the filters.</p>
        )}
      </div>
    </div>
  );
};

export default InternJobList;
