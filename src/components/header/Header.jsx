import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/Logo.svg";
import menu from "../../assets/menu-icon.svg";
import close from "../../assets/close-icon.svg";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <div className="header-content">
        <div className="logo-block">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="list">
          <ul className="desktop-list">
            <li>MY ASSETS</li>
            <li onClick={() => scrollToSection("games")}>GAMES</li>
            <li onClick={() => scrollToSection("about")}>ABOUT</li>
            <li onClick={() => scrollToSection("vip")}>
              <button className="vip-button">VIp rooms</button>
            </li>
          </ul>

          <ul className="mobile-list">
            <img src={menu} alt="menu" onClick={() => setIsVisible(true)} />
            {isVisible && (
              <div className="opened-menu">
                <li>MY ASSETS</li>
                <li onClick={() => scrollToSection("games")}>GAMES</li>
                <li onClick={() => scrollToSection("about")}>ABOUT</li>
                <li onClick={() => scrollToSection("vip")}>VIP ROOMS</li>
                <div className="close-menu" onClick={() => setIsVisible(false)}>
                  <img src={close} alt="close" />
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
