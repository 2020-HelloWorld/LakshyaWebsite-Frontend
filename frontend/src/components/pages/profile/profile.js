import React from 'react';
import './profile.css';
import {Avatar,Bio,Contact} from '../../common/division';

const Profile = ({ avatarSrc, name, occupation, email, phone }) => {
  return (
    <div className="profile">
      <Avatar src={avatarSrc} alt="Profile Avatar" />
      <Bio name={name} occupation={occupation} />
      <Contact email={email} phone={phone} />
    </div>
  );
};

export default Profile;
