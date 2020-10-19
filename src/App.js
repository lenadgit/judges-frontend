import React from "react";
import JudgesPage from "./components/judgespage/Judgespage";
import Home from "./components/home/Home";

import "./App.css";
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <header className="App-header">      
        <nav className = "Header-menu">
          <div className = "Logo-side">
          <span className = "Logo-text-j">Judges</span>&nbsp;
          <span className = "Logo-text-d">Data</span>
          </div>
          <div className = "Link-side">
          <Link to='/' className = "Header-link">Головна</Link>
          <a href = "https://google.com" className = "Header-link">Про проект</a>
          <Link to='/judgespage' className = "Header-link">Дані про суддів</Link>
          </div>  
        </nav>          
      </header>
    </div>     
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/judgespage" component={JudgesPage}></Route>
        </Switch>
    </BrowserRouter>      
    
  );
}

export default App;
