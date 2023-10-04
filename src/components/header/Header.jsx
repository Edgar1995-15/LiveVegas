import React from 'react';
import './header.css';
import Logo from '../../assets/Logo.svg';

function Header() {
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header">
      <div className="header-content">
        <div className="logo-block">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="list">
          <ul>
            <li onClick={() => scrollToSection('games')}>GAMES</li>
            <li onClick={() => scrollToSection('about')}>ABOUT</li>
            <li onClick={() => scrollToSection('contact-us')}>CONTACT US</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
