import React, { useRef, useEffect } from "react";
import "./main.css";
import Button from "../../components/button/Button";
import liveBold from "../../assets/titles/liveBold.png";
import winBolder from "../../assets/titles/winBolder.png";
import Header from "../../components/header/Header";
import { useTranslation } from "react-i18next";
import fusion from "../../assets/background/2.mp4"

function Main() {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <div className="main">
      <div className="fullscreen-video">
        <video ref={videoRef} src={fusion} autoPlay loop muted />
      </div>
      <Header />
      {/* <div className="layer1"></div>
      <div className="layer2"></div> */}
      <div className="main-content">
        <div className="main-title">
          <div className="title">
            <div className="left-title">
              <img src={liveBold} alt="live bold" />
            </div>
            <div className="right-title">
              <img src={winBolder} alt="win bolder" />
            </div>
          </div>
          <p className="description">{t("headerText")}</p>
          <div className="actions">
            <Button
              text="CONTACT US"
              className="transparent-button"
              onClick={() => scrollToSection("contact-us")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
