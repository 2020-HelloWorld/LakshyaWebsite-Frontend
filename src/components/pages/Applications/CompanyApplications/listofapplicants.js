import React, { useState } from 'react';
import download from '../../../../static/logo/download.svg';
import CoverLetterModal from './coverletter';

const ListofApplicants = ({ selectedApplication, applications, onBack }) => {
  const [coverLetter, setCoverLetter] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewCoverLetter = (applicantId) => {
    const selectedApplicant = applications.find(application =>
      application.applicants.some(applicant => applicant.srno === applicantId)
    );

    if (selectedApplicant) {
      const selectedApplicantData = selectedApplicant.applicants.find(applicant =>
        applicant.srno === applicantId
      );

      setCoverLetter(selectedApplicantData.coverletter);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setCoverLetter(null);
    setShowModal(false);
  };

  return (
    <div>
      <h1 className='flex flex-col justify-center items-center font-semibold font-oxygen m-12'>Applicants for {selectedApplication.jobTitle}</h1>
      <div className="bg-white shadow-lg m-10 border-black rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-lightsteelblue py-4 pl-4 pr-1 m-1 text-left text-black border-black">
                Sr No
              </th>
              <th className="bg-lightsteelblue py-2 pl-4 pr-1 m-1 text-left text-black border-b">
                Applicant Name
              </th>
              <th className="bg-lightsteelblue py-2 pl-4 pr-1 m-1 text-left text-black border-b">
                Cover Letter
              </th>
              <th className="bg-lightsteelblue py-2 pl-4 pr-1 m-1 text-left text-black border-b">
                Resume
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedApplication.applicants.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-8">
                  No applicants available
                </td>
              </tr>
            ) : (
              selectedApplication.applicants.map(applicant => (
                <tr key={applicant.srno}>
                  <td className='p-4'>{applicant.srno}</td>
                  <td className='p-4'>{applicant.applicantname}</td>
                  <td className='p-4'>
                    <button
                      onClick={() => handleViewCoverLetter(applicant.srno)}
                      className="bg-palegoldenrod hover:underline text-black font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
                    >
                      View Cover Letter
                    </button>
                    {showModal && (
                      <CoverLetterModal coverLetter={coverLetter} onClose={handleCloseModal} />
                    )}
                  </td>
                  <td className='p-4'>
                    <a
                      href={applicant.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={`Resume_${applicant.applicantname}.pdf`}
                    >
                      <img className="w-3.5 h-3.5 mr-1 mt-1" src={download} alt="Download Icon" /> Resume
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className='m-4'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300" onClick={onBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListofApplicants;
