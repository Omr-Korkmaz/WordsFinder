import React, { useState, useEffect } from 'react';
import Info from './components/Info/Info';
import axios from 'axios';
import './App.css';

const App = () => {
  const [keyword, setKeyword] = useState('Salt');
  const [data, setData] = useState(null);

  //   //api documentation: https://dictionaryapi.dev/
  const searchWord = async () => {
    try {
      const data = await axios.get(`http://localhost:4000/api/${keyword}`);
      await setData(data.data[0]);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
    searchWord();
  },[keyword])

  console.log(searchWord);
  console.log(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchWord();
    setKeyword('');
  };

  const changeWord = (event) => {
    setKeyword(event.target.value);
  };
  return (
    <div>
      <header className='header'>
        <form className='form' onSubmit={handleSubmit}>
          <input
            placeholder='Search'
            type='text'
            className='search-input'
            onChange={changeWord}
            value={keyword}
          />
        </form>
      </header>
      <main>
    
        <Info data={data} />
      </main>
    </div>
  );
};
export default App;
