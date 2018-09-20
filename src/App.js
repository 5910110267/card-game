import React, { Component } from 'react';
import logo from './logo.svg';
import CharacterCard from './CharacterCard';
import './App.css';

const word = "Hello";

class App extends Component {
  render() {
    return (
      <div>
        {
          Array.from(word).map((c,i)=> <CharacterCard value={c} key={i}/>)
        }
      </div>
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
    );
  }
}

export default App;
