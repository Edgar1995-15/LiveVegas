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
            Lorem ipsum dolor sit amet consectetur. Convallis tortor eu aliquet
            volutpat rhoncus. Est volutpat ut lectus suspendisse. Praesent
            elementum dui hendrerit turpis porttitor rhoncus bibendum. Hendrerit
            tempus bibendum pellentesque vivamus eu. Nunc bibendum feugiat
            ligula sed ac mi. Bibendum risus platea et egestas. Integer eu nec
            pellentesque mattis diam volutpat elit risus eget. Phasellus
            ultrices mus in dictum sed magna egestas euismod. <br /> <br /> Quis elementum
            arcu cursus dui faucibus bibendum. Quisque felis tortor odio nunc
            vulputate. Nunc eget vel faucibus massa scelerisque. Tempus eu
            tempus urna nisl ut amet ac vitae. Ornare porttitor nisl neque vel.
            A quis nulla mi nisl. Ac at consequat risus lobortis. <br /> <br /> Ullamcorper
            luctus eget tincidunt elementum dis bibendum. Vel nulla vitae
            integer interdum molestie gravida venenatis. Purus dis varius et sed
            malesuada interdum lobortis nunc. Sed fermentum in elementum hac
            erat lacus nibh et. Sit dictum facilisi metus id amet accumsan.
            Consequat id enim hac tellus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
