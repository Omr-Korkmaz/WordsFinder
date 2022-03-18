import React from 'react';
import './Example.css'

const Example = ({data}) => {
  if (data) {
    return <span className='example'>example: '{data}'</span>;
  } else {
    return null;
  }
};
export default Example;
