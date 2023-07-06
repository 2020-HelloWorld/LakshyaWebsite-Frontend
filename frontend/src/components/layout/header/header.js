import React from 'react';
import "./header.css"
import {BiMenuAltRight} from 'react-icons/bi'
const Header = () => {
  return (
    React.createElement("section", { className: "h-wrapper" },
      React.createElement("div", { className: "h-container" },
        React.createElement("img", { src: "./logo.png", alt: "logo", width: 100 }),
        React.createElement("div", { className: "flexCenter h-menu" },
          React.createElement("a", { href: "" }, "Courses"),
          React.createElement("a", { href: "" }, "Mentorship"),
          React.createElement("a", { href: "" }, "Jobs"),
          React.createElement("a", { href: "" }, "Contact Us"),
          React.createElement("button", { className: "button" },
            React.createElement("a", { href: "" }, "Contact")
          )
        )
      ),
      React.createElement("div", { className: "menu-icon" },
        React.createElement(BiMenuAltRight, { size: 30 })
      )
    )
  );
};

export default Header;
