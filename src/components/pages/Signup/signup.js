import React from 'react';
import CandidateSignUp from './candidatesignup';

const SignUp = () => {
  return (
    <div>
      <h2>Candidate Signup</h2>
      <CandidateSignUp type={1} />

      <h2>Company Signup</h2>
      <CandidateSignUp type={2} />

      <h2>Mentor Signup</h2>
      <CandidateSignUp type={3} />
    </div>
  );
};

export default SignUp;