import React from 'react';
import './App.css';
import Login from './components/Login';
import Landing from './components/Landing';
import Expenses from './components/Expenses';
import Bills from './components/Bills';
// import Image from './components/fogForestCar.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PaymentForm from './components/PaymentForm';

class App extends React.Component {



  render() {
    return (
      <Router>
        <div className="App">
          {/* <header className="App-header"> */}

          <div className="link">
            <Link to="/Login">Login</Link><br />
          </div>
          {/* </header> */}

          <Route path="/Login" component={Login} />
          <Route path="/Landing" component={Landing} />
          <Route path="/Expenses/" component={Expenses} />
          <Route path="/Bills" component={Bills} />
          <Route path="/PaymentForm" component={PaymentForm} />
        </div >
      </Router >
    );
  }
}

export default App;