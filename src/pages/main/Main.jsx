import React from "react";
import "./main.css";
import Button from "../../components/button/Button";
import liveBold from "../../assets/titles/liveBold.png";
import winBolder from "../../assets/titles/winBolder.png";

function Main() {
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="main">
      <div className="layer1"></div>
      <div className="layer2"></div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
