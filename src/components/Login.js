import React from 'react';
// import Landing from '/components/landing.js';
import { Link } from "react-router-dom";
import { Pie } from "react-chartjs";

class Login extends React.Component {

    login = () => {

    }

    monthEarnings = (income, costs) => {
        return [
            {
                color: "#F7464A",
                highlight: "#FF5A5E",
                label: "Costs",
                value: costs,
            },
            {
                color: "#336699",
                highlight: "#FF5A5E",
                label: "Income",
                value: income,
            }]
    }

    render() {
        return (
            <ul>
                <li>
                    <Link to="/Landing">Home</Link>
                    <canvas id="myChart" width="400" height="400"></canvas>
                    <Pie data={this.monthEarnings(50, 75)} />

                </li>
            </ul>

        );
    }
}
export default Login