import React from 'react';
import './App.css';
import Landing from './components/Landing.js';
import Expenses from './components/Expenses';
import Image from './components/fogForestCar.jpg'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            <li><img src={Image} alt="golf" /></li>
          </ul>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>{Landing}</p>
          <button onclick={Expenses.js} class="expenses">My Monthly Expenses</button>
        </header>
      </div>
    );
  }
}

export default App;