import React from 'react';
import './App.css';
import Landing from './components/Landing.js';
import Expenses from './components/Expenses';
import Login from './components/Login'
// import Image from './components/fogForestCar.jpg'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <ul>
            <li><img src={Image} className="golf" /></li>
          </ul> */}
          <div className="golf">
            <p>{Landing}</p>
            <Login />
            {/* <button onClick={} className="expenses">My Monthly Expenses</button> */}
          </div>
        </header>
      </div>
    );
  }
}

export default App;