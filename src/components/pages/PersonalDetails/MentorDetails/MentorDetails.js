import React, { useState } from 'react';
import profile from '../../../../static/logo/profile.png';
import download from '../../../../static/logo/download.png';


const genderOptions = ['Male', 'Female', 'Other'];
const languageOptions = ['Hindi', 'English', 'Marathi', 'Kannada'];

const MentorDetails = () => {
    const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
 const [selectedProfileFile, setSelectedProfileFile] = useState(null);


  const handleGenderClick = (gender) => {
    if (selectedGenders.includes(gender)) {
      setSelectedGenders(selectedGenders.filter((selectedGender) => selectedGender !== gender));
    } else {
      setSelectedGenders([...selectedGenders, gender]);
    }
  };

  const handleLanguageClick = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter((selectedLanguage) => selectedLanguage !== language));
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
       
        setSelectedProfileFile(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  
  

  return (
    <div>
    <div className="min-h-screen flex items-center justify-center bg-white">
    
      <div className="max-w-md w-full bg-white rounded-lg border-solid p-8 relative border-darkgray border-[1px] mt-40">
        <div className="user-icon absolute -top-24 left-1/2 transform -translate-x-1/2">
          <img
            src={profile} // Replace with the URL of the user icon
            alt="User Icon"
            className="w-20 h-20"
          />
        </div>
        <div className="border border-gray-300  rounded-lg p-4 mb-4">
          <div className="mb-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-bold font-oxygen text-gray-700">Full Name</label>
              <input type="text" id="fullName" placeholder="John Doe" className="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-black border-[1px] rounded-md h-7" />
            </div>
            
          </div>
          <div className='mt-5'>
            <p className="block text-sm font-bold font-oxygen text-gray-700">Profile Picture</p>
            <label htmlFor="profilePicture" className="flex items-center text-sm font-bold font-oxygen text-blue-500 cursor-pointer bg-blue-100 p-2 rounded-md w-1/2">
            <img src={download} alt="Download icon" className="w-4 h-4 mr-2 " />
            {selectedProfileFile ? selectedProfileFile : 'Upload Profile Picture'}

            </label>
            <input type="file" id="profilePicture" className="hidden" onChange={handleProfilePictureChange} />
          </div>
          
        </div>
        <div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold font-oxygen text-gray-700">Email</label>
            <input type="email" id="email" placeholder="john.doe@example.com" className="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-black border-[1px] rounded-md h-7" />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="contactNumber" className="block text-sm font-bold font-oxygen text-gray-700">Contact Number</label>
          <input type="tel" id="contactNumber" placeholder="123-456-7890" className="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-black border-[1px] rounded-md h-7" />
        </div>
        <div className="mt-6">
          <label htmlFor="currentCity" className="block text-sm font-bold font-oxygen text-gray-700">Current City</label>
          <input type="text" id="currentCity" placeholder="Bangalore" className="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-black border-[1px] rounded-md h-7" />
        </div>
        <div className="mt-6">
        <label className="block text-sm font-bold font-oxygen text-gray-700">Gender</label>
        <div className="flex gap-2 mt-2">
          {genderOptions.map((gender, index) => (
            <button
              key={index}
              onClick={() => handleGenderClick(gender)}
              className={`bg-white cursor-pointer text-gray-700 font-oxygen py-2 px-4 border-black border-[1px] rounded-xl ${selectedGenders.includes(gender) ? 'relative' : ''}`}
            >
              {selectedGenders.includes(gender) && (
                <span
                  className="absolute left-0 top-0 h-4 w-4 bg-blue-300 rounded-full"
                  style={{ marginTop: '6px', marginLeft: '-12px' }}
                >
                  x
                </span>
              )}
              {gender}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <label className="block text-sm font-bold font-oxygen text-gray-700">Languages You Know</label>
        <div className="flex gap-2 mt-2">
          {languageOptions.map((language, index) => (
            <button
              key={index}
              onClick={() => handleLanguageClick(language)}
              className={`bg-white cursor-pointer text-gray-700 font-oxygen py-2 px-4 border-[1px] border-black rounded-xl ${selectedLanguages.includes(language) ? 'relative' : ''}`}
            >
              {selectedLanguages.includes(language) && (
                <span
                  className="absolute left-0 top-0 h-4 w-4 bg-blue-300 rounded-full"
                  style={{ marginTop: '6px', marginLeft: '-12px' }}
                >
                  x
                </span>
              )}
              {language}
            </button>
          ))}
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-cornflowerblue text-white px-7 py-3 rounded-md float-right mt-4 cursor-pointer">
          Update
        </button>
      </div>
     
    </div>
    <div className="bg-white py-10"></div>
    </div>
  );
};

export default MentorDetails;