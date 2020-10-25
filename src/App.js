import logo from './logo.svg';
import './App.css';
import {ShoppingList} from "./ShoppingList";
import {Game} from "./game/Game";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
        {/*<ShoppingList name="abc"/>*/}
        <Game/>
      </header>
    </div>
  );
}

export default App;
