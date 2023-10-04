import React from "react";
import "./main.css";
import casino from "../../assets/casino.png";
import Button from "../../components/button/Button";

function Main() {
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="main">
      <div className="main-content">
        <div className="left-block">
          <h1 className="title">Live Bold, Win Bolder</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur. Faucibus tristique eu
            viverra pellentesque tempor malesuada risus. Consequat consectetur
            mi iaculis egestas venenatis rutrum. Interdum ultrices aliquam
            cursus enim laoreet cursus. Et eleifend nibh dolor tellus purus
            phasellus mi.{" "}
          </p>
          <div className="actions">
            <Button text="CONTACT US" className="transparent-button" onClick={() => scrollToSection('contact-us')} />
            <Button text="GAMES" className="filled-button" onClick={() => scrollToSection('games')} />
          </div>
        </div>
        <img src={casino} alt="" className="right-block" />
      </div>
    </div>
  );
}

export default Main;
