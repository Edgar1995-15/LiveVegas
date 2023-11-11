import React from 'react';
import './card.css';


const Card = ({ animationDirection, imgUrl }) => {
  return (
    <div className={`card ${animationDirection}-animation`}>
      <img src={imgUrl} alt="" />
    </div>
  );
};

export default Card;
