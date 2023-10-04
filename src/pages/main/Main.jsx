import React from "react";
import "./main.css";
import casino from "../../assets/casino.png";
import Button from "../../components/button/Button";

function Main() {
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="main">
      <div className="main-content">
        <div className="left-block">
          <h1 className="title">Live Bold, Win Bolder</h1>
          <p className="description">
            Live Vegas Online Casino is your gateway to exceptional gaming. We
            offer a bespoke and flawless experience for every player with our
            portfolio of , our commitment to top-level technological solutions
            and advanced streaming technologies. Discover the pinnacle of
            personalised entertainment with us. Our mission is to provide you
            with the ultimate online casino experience. We are committed to
            delivering top-notch entertainment in a exclusive games and VIP
            rooms safe and responsible environment.
          </p>
          <div className="actions">
            <Button
              text="CONTACT US"
              className="transparent-button"
              onClick={() => scrollToSection("contact-us")}
            />
            <Button
              text="GAMES"
              className="filled-button"
              onClick={() => scrollToSection("games")}
            />
          </div>
        </div>
        <img src={casino} alt="" className="right-block" />
      </div>
    </div>
  );
}

export default Main;
