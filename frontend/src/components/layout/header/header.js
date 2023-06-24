import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
