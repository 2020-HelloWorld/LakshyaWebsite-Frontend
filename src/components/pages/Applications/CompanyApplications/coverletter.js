import React from 'react';

const CoverLetterModal = ({ coverLetter, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg m-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-oxygen font-semibold">Cover Letter</h2>
          <button
            className="px-2 py-1 rounded-lg text-white bg-red-500 hover:bg-red-800 focus:outline-none"
            onClick={onClose}
          >
           X
          </button>
        </div>
        <p>{coverLetter}</p>
      </div>
    </div>
  );
};

export default CoverLetterModal;
