import React from 'react';
import Expenses from './Expenses';
import Bills from './Bills';
import Login from './Login';
import PaymentForm from './PaymentForm'
import { Link } from "react-router-dom";
import { Pie } from "react-chartjs";

class Landing extends React.Component {

  state = {
    expense: 0,
    cost: 0
  }

  monthEarnings = (income, costs) => {
    return [
      {
        color: "#1aff66",
        highlight: "#00b33c",
        label: "Income",
        value: income,
      },
      {
        color: "#3333ff",
        highlight: "#0000b3",
        label: "costs",
        value: costs,
      }]
  }

  componentDidMount() {
    fetch('https://capstone-uber.herokuapp.com/api/uber')
      .then(response => response.json())
      .then(response =>

        this.setState({

          expense: response[0].expense

        }))
  }

  render() {
    return (

      <div className="loginForm">
        {/* <canvas></canvas> */}

        <Pie data={this.monthEarnings(1850, 2200)} />
        <div className="links">
          <Link to="/Bills">Bills</Link><br />
          <Link className="" to="/PaymentForm">PaymentForm</Link>
        </div>
      </div>
    );
  }
}
export default Landing