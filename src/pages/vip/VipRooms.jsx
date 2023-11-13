import React, { useState, useEffect } from "react";
import "./vipRooms.css";
import vipTitle from "../../assets/titles/VIP rooms.png";
import russianpoker from "../../assets/vipGames/russianpoker.png";
import ultimate from "../../assets/vipGames/ultimate.png";
import bj from "../../assets/vipGames/bj.png";
import texasholdem from "../../assets/vipGames/texasholdem.png";
import oasis from "../../assets/vipGames/oasispoker.png";
import sixcard from "../../assets/vipGames/sixcard.png";
import vip1 from "../../assets/vipGames/vip1.png";
import vip2 from "../../assets/vipGames/vip2.png";
import vip3 from "../../assets/vipGames/vip3.png";

const VipRooms = () => {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const vipSection = document.getElementById("vip");
      if (vipSection) {
        const rect = vipSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setShowImages(true);
        } else {
          setShowImages(false);
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
        <div className="vip-title">
          <img src={vipTitle} alt="VIP" />
        </div>
        <div className="vip-text">
          <p>
            We have special VIP rooms with exclusive features for the following
            games:
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
                <img src={vip1} alt="vip1" />
              </div>
              <div className="vip2">
                <img src={vip2} alt="vip2" />
              </div>
              <div className="vip3">
                <img src={vip3} alt="vip3" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VipRooms;
