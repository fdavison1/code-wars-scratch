import React from 'react';
import logo from './logo.svg';
import './App.css';
import { filter_list } from './katas/ListFiltering'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        { filter_list }

      </header>
    </div>
  );
}

export default App;
