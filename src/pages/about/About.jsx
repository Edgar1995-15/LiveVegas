import React from "react";
import "./about.css";
import AboutImg from "../../assets/about us.png";
import aboutImage from "../../assets/girls.png";

function About() {
  return (
    <div className="about-main" id="about">
      <img src={AboutImg} alt="about" className="about-img" />
      <h1 className="mobile-title">ABOUT US</h1>
      <div className="about-content">
        <div className="about-image">
          <img src={aboutImage} alt="about" />
        </div>
        <div className="about-text">
          <p>
            Live Vegas is a live casino game provider offering top-notch gaming
            solutions to the world’s prominent live casinos. We combine the
            gaming industry’s best practices and cutting-edge technology to
            deliver high-quality services.User experience and a high level of
            partnership are top priorities for us. Thant’s why <br /> <br />
            We deliver our services in a professional work environment promoting
            a positive impact on the gambling society. We deliver the absolute
            finest and the most innovative gaming solutions. <br /> <br />
            We grow to meet the changing needs of the gambling industry. We
            provide a “private gaming experience” creating the most relaxed
            environment for the players. <br /> <br />
            We offer unique live casino VIP tables ensuring an unforgettable
            one-of-a-kind game. We promote responsible gambling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
