import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Login from './login';
import Search from './components/search/search';

function App() {

  const [token, setToken] = useState("");

  useEffect( () => {
    // const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";

    if(!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token)
      // setClientToken(_token);
    // } else {
    //   setToken(token)
    // } }, []
    }}
  );

  return !token ? (
    <>
      <div id="app">
        <header className="App-header">
          <Login/>
        </header>
      </div>
    </>
  ) : <div id="app">
        <header className="App-header">
          <Search/>
        </header>
      </div>;
}

export default App;
