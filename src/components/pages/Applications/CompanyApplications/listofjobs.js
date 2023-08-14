import React from 'react';
import companyapplications1 from '../../../../static/design/companyapplications1.svg';

const ListofJobs = ({ applications, onViewApplicants }) => {
  
  const handleRowClick = (application) => {
    onViewApplicants(application);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-oxygen font-semibold text-center">Applications List</h1>
        <img className='m-2 w-[18rem] h-[18rem]' src={companyapplications1} alt="Company Applications" />
      </div>

      <div className="bg-white shadow-lg m-10 border-black rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-lightsteelblue py-4 pl-4 pr-1 m-1 text-left text-black border-black">
                Sr No.
              </th> 
              <th className="bg-lightsteelblue py-4 pl-4 pr-1 m-1 text-left text-black border-black">
                Job title
              </th>
              <th className="bg-lightsteelblue py-2 pl-4 pr-1 m-1 text-left text-black border-b">
                Application deadline
              </th>
              <th className="bg-lightsteelblue py-2 pl-4 pr-1 m-1 text-left text-black border-b">
                Number of applicants
              </th>
            </tr>
          </thead>
          <tbody>
          {applications.length === 0 ? (
        <tr>
          <td colSpan="4" className="text-center text-[20px] text-gray-700 font-general-sans py-3">
            No jobs posted
          </td>
        </tr>
      ) : (
        applications.map((application) => (
          <tr
            key={application.id}
            onClick={() => handleRowClick(application)}
            className="cursor-pointer border-b"
          >
            <td className="py-3 pl-4">{application.id}</td>
            <td className="py-3 pl-4">{application.jobTitle}</td>
            <td className="py-3 pl-4">{application.applyBefore}</td>
            <td className="py-3 pl-4">{application.numberofapplicants}</td>
          </tr>
        ))
      )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListofJobs;
