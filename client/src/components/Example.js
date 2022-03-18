import React from 'react';

const Example = ({data}) => {
  if (data) {
    return <span className='Meaning-example'>example: '{data}'</span>;
  } else {
    return null;
  }
};
export default Example;
