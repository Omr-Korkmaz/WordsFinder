import React from 'react';
import Example from '../Example/Example';
import './Meaning.css';

const Meaning = ({data}) => {



  return (
    <div className='meaning'>
      <h3 className='speech'>{data.partOfSpeech}</h3>
      <hr />
      {data.definitions.map((definition, index) => {
        return (
          <div key={index} className='meaning-example'>
            {index + 1}. {definition.definition}
            <br />
            <Example data={definition.example} />
          </div>
        );
      })}
    </div>

  );
};

export default Meaning;
