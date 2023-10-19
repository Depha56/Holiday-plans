import React from 'react';
import '../styles/Button.css'

const PrevButton = ({ onClick }) => {
  return (
    <button className='prevButton' onClick={onClick}>
      Prev
    </button>
  );
};

export default PrevButton;