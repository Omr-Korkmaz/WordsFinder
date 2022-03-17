import React, { useState } from "react";
import Info from "./Info";
import axios from "axios";
import "./App.css";

const App = (props) => {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(null);

  const searchWord = () => {
    //api documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(getData);
  };

  const getData = (response) => {
    setData(response.data[0]);
  };
  console.log(searchWord);
  console.log(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchWord();
  };

  const changeWord = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div>
      <header className="App-header">
        <form className="App-form" onSubmit={handleSubmit}>
          <input
            placeholder="Search"
            type="text"
            className="form-input"
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
