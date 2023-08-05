import React, { useState } from 'react';
import ApplyNowProps from './applynowprops';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ApplyNowStates = () => {
  const { jobId } = useParams();
  const [companyName, setCompanyName] = useState('');
  const [startDate, setStartDate] = useState();
  const [ctc, setCtc] = useState(0);
  const [aboutCompany, setAboutCompany] = useState('');
  const [aboutJob, setAboutJob] = useState('');
  const [skillsRequired, setSkillsRequired] = useState([]);
  const [whoCanApply, setWhoCanApply] = useState([]);
  const [applyBefore,setApplyBefore] = useState('');
  const [perks, setPerks]=useState([]);
  const [numberofopenings, setNumberofopenings]=useState(0);
  const [JobData, setJobData] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.post("/job/details/",{jobId:jobId}) 
        .then((response)=>{
          console.log(response.data);
          setJobData(response.data);
        })
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEventData();
  }, []);

  useEffect(()=>{
    if(JobData!==null){
      setCompanyName(JobData.company);
      setAboutJob(JobData.description);
      setAboutCompany(JobData.aboutCompany);
      setCtc(JobData.salary);
      setStartDate(JobData.startDate);
      setWhoCanApply(JobData.whoCanApply);
      setApplyBefore(JobData.applyBefore);
      setPerks(JobData.perks);
      setNumberofopenings(JobData.openings);
      setSkillsRequired(JobData.skills);
    }
  },[JobData])

  if (!JobData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <ApplyNowProps
        companyName={companyName}
        startDate={startDate}
        ctc={ctc}
        aboutCompany={aboutCompany}
        aboutJob={aboutJob}
        skillsRequired={skillsRequired}
        whoCanApply={whoCanApply}
        applyBefore={applyBefore}
        perks={perks}
        numberofopenings={numberofopenings}
        jobId={jobId}
      />
    </div>
  );
};

export default ApplyNowStates;
