import React from 'react';
import bookmark from '../../../../static/logo/bookmark.svg';
import share from '../../../../static/logo/share.svg';
const iconMap = {
  bookmark: bookmark,
  share: share,
};

const AECourseDescription = ({ info, perks, training }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-4 font-oxygen">About the Course</h2>
      <p className="text-center font-bold mb-6">{info}</p>

      <div className="flex gap-4">
        <div className="w-1/2 p-4 border rounded shadow-md hover:shadow-lg transition-all">
          <h2 className="mb-4 font-oxygen">Perks of the Course</h2>
          <ol>
            {perks.map((perk, index) => (
              <li key={index}>{perk}</li>
            ))}
          </ol>
        </div>
        <div className="w-1/2 p-4 border rounded shadow-md hover:shadow-lg transition-all">
          <h2 className="mb-4 font-oxygen">How Training Works</h2>
          <ol>
            {training.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ol>
          <div className="flex mt-4 mr-auto">
            <img src={iconMap.bookmark} alt="Weeks Icon" className="w-6 h-6 mr-2" />
            <img src={iconMap.share} alt="People Icon" className="w-6 h-6 mr-2" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AECourseDescription;
