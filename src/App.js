import React from 'react';
import './App.css';
import Landing from './components/Landing.js';
import Expenses from './components/Expenses';
import Login from './components/Login'
import Bills from './components/Bills'
// import Image from './components/fogForestCar.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {



  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="golf">
              <ul>
                <li>
                  <Link to="/Landing/">Landing</Link>
                </li>
                <li>
                  <Link to="/Bills/">Expenses</Link>
                </li>
              </ul>
            </div>
          </header>

          <Route path="/" exact component={Login} />
          <Route path="/Landing/" component={Landing} />
          <Route path="/Expenses/" component={Expenses} />
          <Route path="/Bills" component={Bills} />
        </div >
      </Router >);
  }
}

export default App;