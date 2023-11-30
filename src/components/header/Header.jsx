import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/Logo.svg";
import menu from "../../assets/menu-icon.svg";
import close from "../../assets/close-icon.svg";
import { useTranslation } from "react-i18next";
import lang from "../../assets/language-svgrepo-com.svg";
import downArrow from "../../assets/down-arrow-svgrepo-com.svg";
import upArrow from "../../assets/up-arrow.svg";

function Header() {
  const { i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState("ENG");
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLanguage(lng);
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
          <div className="languages-list-mobile">
            <span
              onClick={() => changeLanguage("en")}
              className={activeLanguage === "en" ? "active-language" : ""}
            >
              ENG
            </span>
            <span
              onClick={() => changeLanguage("ru")}
              className={activeLanguage === "ru" ? "active-language" : ""}
            >
              RUS
            </span>
            <span
              // onClick={() => changeLanguage("tr")}
              className={activeLanguage === "tr" ? "active-language" : ""}
            >
              TUR
            </span>
          </div>
          <div className="languages"  onClick={() => setIsOpen(!isOpen)}>
            <img src={lang} alt="selected language" />
            {isOpen && (
              <>
                <div className="languages-list">
                  <span
                    onClick={() => {
                      changeLanguage("en")
                      setIsOpen(false)
                    }}
                    className={activeLanguage === "en" ? "active-language" : ""}
                  >
                    ENG
                  </span>
                  <span
                    onClick={() => {
                      changeLanguage("ru")
                      setIsOpen(false)
                    }}
                    className={activeLanguage === "ru" ? "active-language" : ""}
                  >
                    RUS
                  </span>
                  <span
                    // onClick={() => changeLanguage("tr")}
                    className={activeLanguage === "tr" ? "active-language" : ""}
                  >
                    TUR
                  </span>
                </div>
              </>
            )}

            <span>
              {isOpen ? (
                <div className="lang-box">
                  <span>{activeLanguage.toUpperCase()}</span>
                  <img src={upArrow} alt="select" className="select-language" />
                </div>
              ) : (
                <div className="lang-box">
                  <span>{activeLanguage.toUpperCase()}</span>
                  <img
                    src={downArrow}
                    alt="select"
                    className="select-language"
                  />
                </div>
              )}
            </span>
          </div>
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
