import React, { useState, useEffect } from "react";
import "./about.css";
import aboutImage from "../../assets/g-image.png";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const vipSection = document.getElementById("about");
      if (vipSection) {
        const rect = vipSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setShowImages(true);
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <div className="about-main" id="about">
      <div className="about-title global-titles-green">
        <h1>{t("aboutUs")}</h1>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={aboutImage} alt="about" />
        </div>
        <div className="about-text">
          {showImages && (
            <>
              <div className="whoAreWe">
                <p className="whotitle">{t("whoAreWe")}</p>
                <p>
                  {t("whoWeText")}
                </p>
              </div>
              <div className="whatWeDo">
                <p className="whotitle">{t("whatWeDo")}</p>
                <p>
                  {t("whatWeDoText")}
                </p>
              </div>
              <div className="whyChoose">
                <p className="whotitle">{t("whyChooseUs")}</p>
                <ul>
                  <li>
                    {t("expertise")}
                  </li>
                  <li>
                    {t("innovation")}
                  </li>
                  <li>
                    {t("clientCentric")}
                  </li>
                  <li>
                    {t("reliability")}
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
