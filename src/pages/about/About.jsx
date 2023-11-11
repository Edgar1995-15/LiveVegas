import React, { useState, useEffect } from "react";
import "./about.css";
import aboutImage from "../../assets/g-image.png";
import aboutTitle from "../../assets/titles/About us.png";

function About() {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (!showImages && aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setShowImages(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showImages]);

  return (
    <div className="about-main" id="about">
      <div className="about-title">
        <img src={aboutTitle} alt="About US" />
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={aboutImage} alt="about" />
        </div>
        <div className="about-text">
          {showImages && (
            <>
              <div className="whoAreWe">
                <p className="whotitle">WHO ARE WE</p>
                <p>
                  We are a dynamic team of dedicated professionals, united by
                  our passion for all things tech. Our diverse expertise spans
                  from software development and cybersecurity to cloud computing
                  and AI. We thrive on challenges and are driven by the desire
                  to solve complex problems with elegant solutions.
                </p>
              </div>
              <div className="whatWeDo">
                <p className="whotitle">WHAT WE DO</p>
                <p>
                  We specialize in crafting cutting-edge IT solutions tailored
                  to your unique needs. From developing robust software
                  applications to fortifying your digital defenses, we provide a
                  full spectrum of IT services. Our commitment to staying at the
                  forefront of technological advancements ensures that our
                  clients are always one step ahead.
                </p>
              </div>
              <div className="whyChoose">
                <p className="whotitle">WHY CHOOSE US</p>
                <ul>
                  <li>
                    Expertise: Our team consists of top-tier talent with a deep
                    understanding of industry trends and emerging technologies.
                  </li>
                  <li>
                    Innovation: We embrace innovation, constantly seeking new
                    ways to improve and optimize your IT environment.
                  </li>
                  <li>
                    Client-Centric: Your success is our priority. We work
                    closely with you to understand your goals and deliver
                    solutions that exceed your expectations.
                  </li>
                  <li>
                    Reliability: We take pride in delivering on time and within
                    budget, consistently meeting our commitments.
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
