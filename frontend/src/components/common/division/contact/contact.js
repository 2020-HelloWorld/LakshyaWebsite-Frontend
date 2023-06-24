import React from 'react';
import './contact.css';

const ContactInfo = ({ email, phone }) => {
  return (
    <div className="contact-info">
      <p className="email">{email}</p>
      <p className="phone">{phone}</p>
    </div>
  );
};

export default ContactInfo;
