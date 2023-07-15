import React from 'react';

const CandidateSignUp= () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-4 font-oxygen">Sign Up</h1>
        <p className="text-lg mb-8">Get more internship opportunities</p>
        <div className="flex space-x-4">
          <button className="bg-cornflowerblue hover:bg-cornflowerblue text-white px-10 py-1.5 rounded-lg">
            <img src="./linkedin.svg" alt="LinkedIn" className="w-9 h-9" />
          </button>
          <button className="bg-royalblue hover:bg-cornflowerblue-dark text-white px-10 py-1.5 rounded-lg">
            <img src="./facebook.svg" alt="Facebook" className="w-9 h-9" />
          </button>
          <button className="bg-deeppink hover:bg-pink-dark text-white px-10 py-1.5 rounded-lg">
            <img src="./instagram.svg" alt="Instagram" className="w-9 h-9" />
          </button>
        </div>
        <button className="bg-white text-gray-900 border border-gray-300 px-4 py-2 rounded-lg mt-4 flex items-center">
          <img src="/google.svg" alt="Google" className="w-52 h-6 mr-2" />
          <span className="items-center">Sign Up with Google</span>
        </button>


        <p className="mt-4 mb-2">------- OR -------</p>
        <div className="mb-4">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border border-gray-300 px-4 py-3 w-96 "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="border border-gray-300 px-4 py-3 w-96 "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fullname" className="sr-only">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="Full Name"
            className="border border-gray-300 px-4 py-3 w-96 "
          />
        </div>
        <p className="text-sm text-gray-600 mb-4">
          By signing up, you agree to our terms and conditions.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-12 py-2 rounded-lg mb-2">
          Sign Up
        </button>
        <p className="text-sm text-gray-600">
          Register as mentor/company
        </p>
        <p className="text-sm text-gray-600">
          Already registered? Login
        </p>
      </div>
      <div className="w-full md:w-1/2 bg-gray-100 flex justify-center items-center rounded-b-full overflow-hidden rotate-90">
      <img
          className="h-[90%] w-[60%] top-[22.5%] right-[5.51%] bottom-[18.7%] left-[62.6%] transform -rotate-90"
          alt=""
          src="/studentlogin.svg"
        />
      </div>
    </div>
  );
}

export default CandidateSignUp;