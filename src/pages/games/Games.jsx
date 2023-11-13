import React, { useState, useEffect } from "react";
import "./games.css";
import gamesImg from "../../assets/titles/games.png";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import sixcard from "../../assets/cardIcons/example1.png";
import classicroulette from "../../assets/cardIcons/classicRoulette.png";
import russianpoker from "../../assets/cardIcons/russianpoker.png";
import texasholdem from "../../assets/cardIcons/texasholdem.png";
import baccarat from "../../assets/cardIcons/baccarat.png";
import autoroulette from "../../assets/cardIcons/autoroulette.png";
import bj from "../../assets/cardIcons/bj.png";
import ultimate from "../../assets/cardIcons/ultimate.png";

function Games() {
  const cardsData = [
    { content: "6 CARD POKER", imgUrl: sixcard },
    {
      content: "ROULETTE",
      imgUrl: classicroulette,
    },
    {
      content: "RUSSIAN POKER",
      imgUrl: russianpoker,
    },
    {
      content: "TEXAS HOLD'EM",
      imgUrl: texasholdem,
    },
    { content: "BACCARAT", imgUrl: baccarat },
    {
      content: "AUTO ROULETTE",
      imgUrl: autoroulette,
    },
    { content: "BLACKJACK", imgUrl: bj },
    {
      content: "ULTIMATE TEXAS HOLD'EM",
      imgUrl: ultimate,
    },
  ];

  const [startAnimations, setStartAnimations] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const gamesSection = document.getElementById("games");
      if (gamesSection) {
        const rect = gamesSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setStartAnimations(true);
        } else {
          setStartAnimations(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="games-main" id="games">
      <div className="games-title">
        <img src={gamesImg} alt="games" />
      </div>
      <div className="games-cards">
        <div className="card-grid">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              content={card.content}
              imgUrl={card.imgUrl}
              animationDirection={
                startAnimations ? (index < 4 ? "left" : "right") : "hidden"
              }
            />
          ))}
        </div>
        <div className="view-btn">
          <Button text="VIEW MORE" className="filled-button" />
        </div>
      </div>
    </div>
  );
}

export default Games;
