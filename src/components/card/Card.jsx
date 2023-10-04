import React from 'react';
import './card.css'

const Card = ({ imageUrl, content }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card" className="card-image" />
      <p className='card-content'>{content}</p>
      <button className='view-more'>VIEW MORE</button>
    </div>
  );
};

export default Card;
