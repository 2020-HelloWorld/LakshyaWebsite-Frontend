import React, { useState } from 'react';
import NavBar from '../../../layout/Navbar/studentNavBar';
import Footer from '../../../layout/footer/footer';
import ListofJobs from './listofjobs';
import ListofApplicants from './listofapplicants';
import resume from '../../../../static/design/resume.pdf'
const applications1 = [
{
    id:1,
    jobTitle:'Seimens1',
    applyBefore:'8th November 2023',
    numberofapplicants:'20',
    applicants: [
        // {
        //   srno: 1,
        //   applicantname: 'name1',
        //   resume:resume,
        //   coverletter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget fermentum nisl. Sed ac felis eu leo mattis facilisis. Vivamus vel ex non justo vulputate tincidunt. Nulla facilisi. Sed ut quam vitae odio mattis tempus. Etiam interdum massa eu massa interdum, et auctor lectus laoreet. Vivamus pharetra scelerisque convallis. Suspendisse potenti. Cras ut velit ac ligula lobortis tristique. Suspendisse potenti."
        // },
        // {
        //     srno: 2,
        //     applicantname: 'name2',
        //     resume:resume,
        //     coverletter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget fermentum nisl. Sed ac felis eu leo mattis facilisis. Vivamus vel ex non justo vulputate tincidunt. Nulla facilisi. Sed ut quam vitae odio mattis tempus. Etiam interdum massa eu massa interdum, et auctor lectus laoreet. Vivamus pharetra scelerisque convallis. Suspendisse potenti. Cras ut velit ac ligula lobortis tristique. Suspendisse potenti."
        //   },
        //   {
        //     srno: 3,
        //     applicantname: 'name3',
        //     resume:resume,
        //     coverletter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget fermentum nisl. Sed ac felis eu leo mattis facilisis. Vivamus vel ex non justo vulputate tincidunt. Nulla facilisi. Sed ut quam vitae odio mattis tempus. Etiam interdum massa eu massa interdum, et auctor lectus laoreet. Vivamus pharetra scelerisque convallis. Suspendisse potenti. Cras ut velit ac ligula lobortis tristique. Suspendisse potenti."
        //   },
        //   {
        //     srno: 4,
        //     applicantname: 'name4',
        //     resume:resume,
        //     coverletter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget fermentum nisl. Sed ac felis eu leo mattis facilisis. Vivamus vel ex non justo vulputate tincidunt. Nulla facilisi. Sed ut quam vitae odio mattis tempus. Etiam interdum massa eu massa interdum, et auctor lectus laoreet. Vivamus pharetra scelerisque convallis. Suspendisse potenti. Cras ut velit ac ligula lobortis tristique. Suspendisse potenti."
        //   }
    ]
},
{
    id:2,
    jobTitle:'Seimens2',
    applyBefore:'9th November 2023',
    numberofapplicants:'20',
    applicants: [
        {
          srno: 1,
          applicantname: 'name1',
          resume: resume,
          coverletter: "To Whom It May Concern, I am excited to apply for the position..."
        },]
},
{
    id:3,
    jobTitle:'Seimens3',
    applyBefore:'10th November 2023',
    numberofapplicants:'20',
    applicants: [
        {
          srno: 1,
          applicantname: 'name1',
          resume:resume,
          coverletter: "To Whom It May Concern, I am excited to apply for the position..."
        },]
},
{
    id:4,
    jobTitle:'Seimens4',
    applyBefore:'11th November 2023',
    numberofapplicants:'20',
    applicants: [
        {
          srno: 1,
          applicantname: 'name1',
          resume: resume,
          coverletter: "To Whom It May Concern, I am excited to apply for the position..."
        },]
},
{
    id:5,
    jobTitle:'Seimens5',
    applyBefore:'12th November 2023',
    numberofapplicants:'20',
    applicants: [
        {
          srno: 1,
          applicantname: 'name1',
          resume: resume,
          coverletter: "To Whom It May Concern, I am excited to apply for the position..."
        },]
},
{
    id:6,
    jobTitle:'Seimens6',
    applyBefore:'13th November 2023',
    numberofapplicants:'20',
    applicants: [
        {
          srno: 1,
          applicantname: 'name1',
          resume:resume,
          coverletter: "To Whom It May Concern, I am excited to apply for the position..."
        }, 
        {
            srno: 2,
            applicantname: 'name2',
            resume:resume,
            coverletter: "To Whom It May Concern, I am excited to apply for the position..."
        },
        {
            srno: 3,
            applicantname: 'name3',
            resume:resume,
            coverletter: "To Whom It May Concern, I am excited to apply for the position..."
        },
        {
            srno: 4,
            applicantname: 'name4',
            resume:resume,
            coverletter: "To Whom It May Concern, I am excited to apply for the position..."
        },
        {
            srno: 5,
            applicantname: 'name5',
            resume:resume,
            coverletter: "To Whom It May Concern, I am excited to apply for the position..."
        },
    ]
},
]

const Applications = () => {
    const [selectedApplication, setSelectedApplication] = useState(null);

  const handleViewApplicants = (application) => {
    setSelectedApplication(application);
  };

  const handleBackToList = () => {
    setSelectedApplication(null); // Clear the selected application to go back
  };
  
  return (
    <div>
        <NavBar/>
      {selectedApplication ? (
        <ListofApplicants selectedApplication={selectedApplication} applications={applications1} onBack={handleBackToList} />

      ) : (
        <ListofJobs applications={applications1} onViewApplicants={handleViewApplicants} />
      )}
      <Footer/>
    </div>
  );
};

export default Applications;