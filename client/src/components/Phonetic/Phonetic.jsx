import React from 'react';
import './Phonetic.css';

const Phonetic = ({phonetic}) => {
  const audio = new Audio(phonetic.audio);

  function handleClick() {
    audio.play();
  }

  if (phonetic) {
    return (
      <div className='Phonetic'>
        <button
          type='button'
          className='Phonetic-button'
          onClick={handleClick}
        >Listen</button>
        <span className='Phonetic-text'>{phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
};
export default Phonetic;
