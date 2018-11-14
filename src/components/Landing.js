import React from 'react';
import Expenses from './Expenses';
import Bills from './Bills';
import PaymentForm from './PaymentForm'
import { Link } from "react-router-dom";
import { Pie } from "react-chartjs";

class Landing extends React.Component {

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

  render() {
    console.log('hit landing')
    return (

      <div>
        {/* <canvas></canvas> */}
        <Pie data={this.monthEarnings(600, 2200)} />
        <h1>Landing Testing</h1>
        <div>
          <Link to="/Bills">Bills</Link>
          <Link className="" to="/Expenses">Expenses</Link>
          <Link className="" to="/PaymentForm">PaymentForm</Link>
        </div>
      </div>
    );
  }
}
export default Landing