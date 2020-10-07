import React from 'react';
//import logo from './logo.svg';
import logo from './law-justice.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <nav className = "Header-menu">
          <div className = "Logo-side">
          <span className = "Logo-text-j">Judges</span>&nbsp;
          <span className = "Logo-text-d">Data</span>
          </div>
          <div className = "Link-side">
          <a href = "https://google.com" className = "Header-link">Головна</a>
          <a href = "https://google.com" className = "Header-link">Про проект</a>
          <a href = "https://google.com" className = "Header-link">Дані про суддів</a>
          </div>  
        </nav>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
