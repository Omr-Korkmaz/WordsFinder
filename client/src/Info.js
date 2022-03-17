import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Info.css";

const Info = (props) => {
  if (props.data) {
    return (
      <div>
        <h2 className="Info-word">{props.data.word}</h2>
        {props.data.phonetics.map((phonetic, index)=> {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.data.meanings.map((meaning, index)=> {
          return (
            <div key={index}>
              <Meaning data={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};
export default Info;
