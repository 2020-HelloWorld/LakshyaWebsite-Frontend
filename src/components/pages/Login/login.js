import React from 'react';
import LoginCommon from './LoginCommon';

const Login = () => {
  return (
    <div>
      <h2>Candidate Login</h2>
      <LoginCommon type={1} />

      <h2>Company Login</h2>
      <LoginCommon type={2} />

      <h2>Mentor Login</h2>
      <LoginCommon type={3} />
    </div>
  );
};

export default Login;