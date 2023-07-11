import React from 'react';
import Meaning from '../Meaning/Meaning';
import Phonetic from '../Phonetic/Phonetic';
import './Info.css';

const Info = ({data}) => {
  if (data) {
    return (
      <div>
        <h2 className='info'>{data.word}</h2>
        {data.phonetics.map((phonetic, index)=> {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {data.meanings.map((meaning, index)=> {
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
