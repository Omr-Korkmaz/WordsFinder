import React from "react";
import "./Phonetic.css";

const Phonetic = (props) => {
  const audio = new Audio(props.phonetic.audio);

  function handleClick() {
    audio.play();
  }

  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <button
          type="button"
          className="Phonetic-button"
          onClick={handleClick}
        ></button>
        <span className="Phonetic-text">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
};
export default Phonetic;
