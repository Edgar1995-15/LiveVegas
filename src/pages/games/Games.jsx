import React, { useState, useEffect } from "react";
import "./games.css";
import gamesImg from "../../assets/titles/games.png";
import Card from "../../components/card/Card";
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
    { content: "6 CARD POKER", imgUrl: sixcard, id: "card1" },
    {
      content: "ROULETTE",
      imgUrl: classicroulette,
      id: "card2"
    },
    {
      content: "RUSSIAN POKER",
      imgUrl: russianpoker,
      id: "card3"
    },
    {
      content: "TEXAS HOLD'EM",
      imgUrl: texasholdem,
      id: "card4"
    },
    { content: "BACCARAT", imgUrl: baccarat, id: "card5" },
    {
      content: "AUTO ROULETTE",
      imgUrl: autoroulette,
      id: "card6"
    },
    { content: "BLACKJACK", imgUrl: bj, id: "card7" },
    {
      content: "ULTIMATE TEXAS HOLD'EM",
      imgUrl: ultimate,
      id: "card8"
    },
  ];

  const [startAnimations, setStartAnimations] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const gamesSection = document.querySelector(".card");
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
      <span className="games-bg"></span>
      <div className="games-title">
        <img src={gamesImg} alt="games" />
      </div>
      <div className="games-cards">
        <div className="card-grid">
        {cardsData.map((card) => (
            <Card
              key={card.id}
              content={card.content}
              imgUrl={card.imgUrl}
              id={card.id}
              animationDirection={
                startAnimations ? (card.id < "card5" ? "left" : "right") : "hidden"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Games;
