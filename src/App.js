import React from 'react';
import './App.css';
import Landing from './components/Landing.js';
import Expenses from './components/Expenses';
import Login from './components/Login'
// import Image from './components/fogForestCar.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router><div className="App">
        <header className="App-header">
          <div className="golf">
            <p>{Landing}</p>
            <ul>
              <li>
                <Link to="/Landing.js">Home</Link>
              </li>
            </ul>
            <Login />
            {/* <button onClick={} className="expenses">My Monthly Expenses</button> */}
          </div>
        </header>
      </div>
      </Router >);
  }
}

export default App;