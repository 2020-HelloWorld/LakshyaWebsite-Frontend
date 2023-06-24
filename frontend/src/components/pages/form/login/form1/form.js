import React, { useState } from 'react';
import {Input1} from '../../../../common/input';
import {Button2} from '../../../../common/button';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input1
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <Input1
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button2 label="Login" />
    </form>
  );
};

export default LoginForm;
