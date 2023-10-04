import React from "react";
import "./games.css";
import gamesImg from "../../assets/games.png";
import Card from "../../components/card/Card";
import BlackJack from "../../assets/Blackjack.svg";
import Roulette from "../../assets/Roulette.svg";
import Baccarat from "../../assets/BACCARAT.svg";
import Oasis from "../../assets/OASIS POKER.svg";
import Texas from "../../assets/TEXAS HOLD'EM.png";
import SixCard from "../../assets/6 CARD POKER.svg";
import Button from "../../components/button/Button";

function Games() {
  const cardsData = [
    { imageUrl: BlackJack, content: "BLACKJACK" },
    { imageUrl: Roulette, content: "ROULETTE" },
    { imageUrl: Baccarat, content: "BACCARAT" },
    { imageUrl: Roulette, content: "ROULETTE" },
    { imageUrl: BlackJack, content: "BLACKJACK" },
    { imageUrl: Oasis, content: "OASIS POKER" },
    { imageUrl: Texas, content: "TEXAS HOLD'EM" },
    { imageUrl: SixCard, content: "6 CARD POKER" },
  ];

  return (
    <div className="games-main" id="games">
      <img src={gamesImg} alt="games" className="games-img" />
      <h1 className="mobile-title">Games</h1>
      <div className="games-cards">
        <div className="card-grid">
          {cardsData.map((card, index) => (
            <Card key={index} imageUrl={card.imageUrl} content={card.content} />
          ))}
        </div>
        <div className="view-btn">
          <Button text="VIEW MORE" className="transparent-button" />
        </div>
      </div>
    </div>
  );
}

export default Games;
