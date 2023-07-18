import React from 'react';
import start from '../../../../static/logo/start.svg';
import dur from '../../../../static/logo/duration1.svg';
import stipend from '../../../../static/logo/stipend.svg';
import trend from '../../../../static/logo/trend2.svg';
import candidatehired from '../../../../static/logo/usercheck.svg';
import opportcreated from '../../../../static/logo/briefcase.svg';


const ApplyNowProps = ({
  companyName,
  startDate,
  duration,
  ctc,
  aboutCompany,
  aboutInternship,
  skillsRequired,
  whoCanApply,
  postedTime,
  numberofhiring,
  hiringsince,
  numberofopportunities,
  perks,
  numberofopenings
}) => {
    const skillsArray = skillsRequired.split(', ');
    const whoCanApplyArray= whoCanApply.split(', ');
    const perksArray=perks.split(', ');
  return (
    <div className="flex flex-col items-center justify-center">
      <label className="text-17xl md:text-5xl font-semibold font-general-sans text-center mb-8 px-4 py-6">
        {companyName}
      </label>
      <div className="rounded-lg p-8 w-full max-w-[800px] overflow-hidden border-[1.1px] border-solid border-darkgray mx-4 mb-4 relative">
        <div className="absolute top-4 left-4 flex flex-row items-center gap-2 py-2 px-4 border-[1.1px] border-solid border-deepskyblue bg-white text-black text-lg md:text-xl">
          <img className="w-6 h-6" alt="trend" src={trend} />
          <div>Actively hiring</div>
        </div>

        <div className="flex flex-col justify-start gap-4 mt-8">
          <b className="text-xl md:text-3xl font-oxygen lg:text-[27px] mt-8">{companyName}</b>
          <div className="flex flex-row justify-start gap-4">
            <div className="flex flex-col">
              <div className="flex flex-row gap-2">
                <img className="w-6 h-6" alt="Start" src={start} />
                <span className="font-bold">START DATE</span>
              </div>
              <div className="mb-4 items-center">{startDate}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row items-center gap-2">
                <img className="w-6 h-6" alt="Duration" src={dur} />
                <span className="font-bold">DURATION</span>
              </div>
              <div className="mb-4 items-center">{duration}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row items-center gap-2">
                <img className="w-6 h-6" alt="Stipend" src={stipend} />
                <span className="font-bold">STIPEND</span>
              </div>
              <div className="mb-4 items-center">{ctc}</div>
            </div>
          </div>
          <div className="flex items-center mb-4 relative">
          <div className="rounded w-max h-[28px] flex flex-row items-center px-2.5 border-[1.1px] border-solid border-palegoldenrod bg-palegoldenrod text-[15.6px] text-black mb-4">
          <div className="relative">{postedTime}</div>
          </div>
        </div>

        </div>
        <div className="text-xl md:text-2xl font-oxygen font-semibold">About {companyName}</div>
        <div className="my-5 text-lg md:text-xl inline-block w-full md:w-[90%]">
        {aboutCompany}
      </div>
<div className="rounded-lg p-4 border-[1.1px] border-solid border-darkgray mb-4 relative">
      <b className="text-xl md:text-2xl text-dimgray-100">
          ACTIVITY ON LAKSHYA
      </b>

    <div className="flex flex-row items-center justify-start gap-8 text-base md:text-lg text-dimgray-100">
        <div className="flex flex-row items-center gap-2">
            <img
            className="w-6 h-6 my-6"
            alt=""
            src={candidatehired}
            />
            <b className="relative">{numberofhiring} candidates hired</b>
        </div>
        <div className="flex flex-row items-center gap-2">
            <img
            className="w-6 h-6 my-6"
            alt=""
            src={dur}
            />
            <b className="relative">Hiring since {hiringsince}</b>
        </div>
        <div className="flex flex-row items-center gap-2">
            <img
            className="w-6 h-6 my-6"
            alt=""
            src={opportcreated}
            />
            <b className="relative">{numberofopportunities} opportunities created</b>
        </div>
    </div>
</div>

        
        <b className="text-lg md:text-xl font-oxygen font-semibold my-2">
        About the Internship:
        </b>
        <div className="my-5 text-base md:text-lg inline-block w-full md:w-[90%]">
        {aboutInternship}
      </div>

      <div className="text-lg md:text-xl font-oxygen font-semibold my-8">
        Skills Required:
        </div>
      <div className="flex flex-row flex-wrap gap-4">
        {skillsArray.map((skill, index) => (
          <div key={index} className="rounded bg-gainsboro h-9 flex flex-row p-2.5 box-border items-center justify-center text-lg">
            <div className="relative">{skill}</div>
          </div>
        ))}
      </div>

      <div className="text-lg md:text-xl font-oxygen font-semibold my-8">
        Earn Certification in these skills:
      </div>
      <div className="flex flex-row flex-wrap gap-4 my-4">
        {skillsArray.map((skill, index) => (
          <div key={index} className="text-deepskyblue h-9 flex flex-row p-2.5 items-center justify-center ">
            <button className="relative rounded text-deepskyblue bg-white hover:bg-slate-100 text-lg md:text-xl px-2 py-2">{skill}</button>
          </div>
        ))}
      </div>


      <div className="text-lg md:text-xl font-oxygen font-semibold my-8">
        Who Can Apply:
      </div>
      <div className="rounded bg-palegoldenrod p-2.5 md:w-[50%]">
      <div className="flex flex-col gap-2">
  {whoCanApplyArray.map((apply, index) => (
    <div key={index} className="relative text-lg md:text-xl px-2 py-2">
      <span className="flex items-center">
        <span className="w-2 h-2 rounded-full bg-black mr-2"></span>
        {apply}
      </span>
    </div>
  ))}
</div>
</div>

<div className="text-lg md:text-xl font-oxygen font-semibold mt-8 mb-4">Perks</div>
<div className="rounded bg-palegoldenrod p-2.5 md:w-[50%]">
      <div className="flex flex-col gap-2">
  {perksArray.map((per, index) => (
    <div key={index} className="relative text-lg md:text-xl px-2 py-2">
      <span className="flex items-center">
        <span className="w-2 h-2 rounded-full bg-black mr-2"></span>
        {per}
      </span>
    </div>
  ))}
</div>
</div>

<div className="text-lg md:text-xl font-oxygen font-semibold my-8">
    Number of openings: {numberofopenings}
</div>

<button className="rounded bg-deepskyblue w-[80px] h-11 flex justify-center items-center text-white font-semibold my-10 mx-auto">Apply Now</button>



      </div>
    </div>
  );
};

export default ApplyNowProps;