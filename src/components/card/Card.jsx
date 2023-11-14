import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./card.css";

const Card = ({ id, animationDirection, imgUrl }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const cardClassName = `card ${animationDirection}-animation ${
    isVisible ? "mobileanimation" : ""
  }`;

  return (
    <div ref={ref} id={id} className={cardClassName}>
      {isVisible && <img src={imgUrl} alt="game" />}
    </div>
  );
};

export default Card;
