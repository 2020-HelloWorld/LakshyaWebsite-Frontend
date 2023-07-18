import React from 'react';
import { useParams } from 'react-router-dom';
import google from '../../../static/logo/google.svg';
import fb from '../../../static/logo/facebook.svg';
import student from '../../../static/design/studentlogin.png';
import company from '../../../static/design/companylogin.png';
import mentor from '../../../static/design/mentorlogin.png';

const LoginCommon = () => {
  const { type } = useParams();
  let imageSrc = '';

  let options = '';

  // Determine the image source and fullNameLabel based on the type prop
  switch (type) {
    case 'student':
      imageSrc = student;
      options = 'Company/Mentor';
      break;
    case 'company':
      imageSrc = company;
      options = 'Mentor/Candidate';
      break;
    case 'mentor':
      imageSrc = mentor;
      options = 'Candidate/Company';
      break;
    default:
      // Provide default values if the type is not recognized
      imageSrc = student;
      options = 'company/Mentor';
      break;
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-4 font-oxygen">Hello Again</h1>
        <div className="flex items-center justify-between w-96 mb-2">
          <hr className="w-1/3 bg-gray-500"/>
          <p className="text-sm text-gray-500 px-2">OR</p>
          <hr className="w-1/3 bg-gray-500" />
        </div>
        <div className="flex space-x-4">
          <button className="bg-white text-gray-900 hover:bg-gray-300 border border-gray-300 px-6 py-2 flex items-center justify-center">
            <img src={google} alt="Google" className="w-10 h-9" />
            <span className="ml-2 font-oxygen">Sign in with Google</span>
          </button>
          <button className="bg-blue-500 text-gray-900 hover:bg-blue-700 border border-gray-300 px-6 py-2  flex items-center justify-center">
            <img src={fb} alt="Facebook" className="w-10 h-9" />
            <span className="ml-2 font-oxygen">Sign in with Facebook</span>
          </button>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border border-gray-300 px-4 py-3 w-96"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Must be at least 8 characters"
            className="border border-gray-300 px-4 py-3 w-96"
          />
        </div>
        <p className="text-sm text-blue-500 text-left mb-4">
          Forgot Password?
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-xl px-10 py-3 w-96 mb-2">
          Login
        </button>
        <p className="text-sm text-gray-600">
          Login as <span className="text-blue-500">{options}</span>
        </p>
        <p className="text-sm text-gray-600">
          New to Lakshya? <span className="text-blue-500">Register</span>
        </p>
      </div>
      <div className="hidden md:block w-full md:w-1/2 bg-gray-100 flex justify-center items-center rounded-b-full overflow-hidden rotate-90">
        <img
          className="w-[90%] top-[40%] right-[5%] bottom-[20%] left-[55%] transform -rotate-90"
          alt=""
          src={imageSrc}
        />
      </div>
    </div>
  );
};

export default LoginCommon;
