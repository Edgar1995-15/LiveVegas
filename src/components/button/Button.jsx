import React from 'react';
import './button.css'

const Button = ({ text, onClick, className }) => {
  return (
    <>
    <div className='transparent-button-container'>
    <button onClick={onClick} className={`custom-button btn-6 ${className}`}>
      {text}
    </button>
    </div>
    </>
  );
};

export default Button;
