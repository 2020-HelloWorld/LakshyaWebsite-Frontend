import React, { useState } from 'react';
import {Input1} from '../../../../common/input';
import {Button2} from '../../../../common/button';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input1
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={handleNameChange}
      />
      <Input1
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={handleEmailChange}
      />
      <Input1
        type="textarea"
        placeholder="Your Message"
        value={message}
        onChange={handleMessageChange}
      />
      <Button2 type="submit" label="Submit" />
    </form>
  );
};

export default ContactForm;
