import React, { useState, useEffect } from "react";
import "./vipRooms.css";
import russianpoker from "../../assets/vipGames/russianpoker.png";
import ultimate from "../../assets/vipGames/ultimate.png";
import bj from "../../assets/vipGames/bj.png";
import texasholdem from "../../assets/vipGames/texasholdem.png";
import oasis from "../../assets/vipGames/oasispoker.png";
import sixcard from "../../assets/vipGames/sixcard.png";
import vip1 from "../../assets/vipGames/1.svg";
import vip2 from "../../assets/vipGames/2.svg";
import vip3 from "../../assets/vipGames/3.svg";
import { useTranslation } from "react-i18next";

const VipRooms = () => {
  const { t } = useTranslation();
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const vipSection = document.querySelector("#vip");
      if (vipSection) {
        const rect = vipSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setShowImages(true);
        } else {
          if (window.innerWidth > 768) {
            setShowImages(false);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`vip-main ${showImages ? "show-images" : ""}`} id="vip">
      <span className="vip-bg"></span>
      <div className="vip-hidden">
        <div className="vip-title global-titles-purple">
          <h1>{t("vipRooms")}</h1>
        </div>
        <div className="vip-text">
          <p>
            {t("vipRoomTitle")}
          </p>
        </div>
        <div className="vip-games">
          {showImages && (
            <>
              <div className="left-games">
                <img src={russianpoker} alt="russian" />
                <img src={ultimate} alt="ultimate" />
                <img src={bj} alt="blackjack" />
              </div>
              <div className="right-games">
                <img src={texasholdem} alt="russian" />
                <img src={oasis} alt="ultimate" />
                <img src={sixcard} alt="blackjack" />
              </div>
            </>
          )}
        </div>
        <div className="vip-desc">
          {showImages && (
            <>
              <div className="vip1">
                <span className="vip-enum">
                  <img src={vip1} alt="1" />
                </span>
                <div className="vip-content">
                  <span>
                    {t("vip1start")}
                    <span className="secondary-text">
                    {t("vip1purple")}
                    </span>
                    {t("vip1end")}
                  </span>
                </div>
              </div>
              <div className="vip2">
                <span className="vip-enum">
                  <img src={vip2} alt="2" />
                </span>
                <div className="vip-content">
                  <span>
                    {t("vip2start")}
                    <span className="secondary-text">{t("vip2purple")}</span> ,
                    {t("vip2end")}
                  </span>
                </div>
              </div>
              <div className="vip3">
                <span className="vip-enum">
                  <img src={vip3} alt="3" />
                </span>
                <div className="vip-content">
                  <span>
                    {t("vip3start")}
                    <span className="secondary-text"> {t("vip3purple")}</span>{" "}
                    {t("vip3end")}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VipRooms;
