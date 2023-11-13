import React, { useState, useEffect, useRef } from "react";
import "./card.css";

const Card = ({ id, animationDirection, imgUrl }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === cardRef.current && entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, options);

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={cardRef}
        id={id}
        className={`card ${animationDirection}-animation ${
          isVisible ? "mobileanimation" : ""
        }`}
      >
        {isVisible && <img src={imgUrl} alt="game" />}
      </div>
    </>
  );
};

export default Card;
