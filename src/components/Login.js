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
        return (

            <div>
                <Link className="chartlink" to="/Landing">Home</Link>
                {/* <canvas></canvas> */}
                <Pie data={this.monthEarnings(600, 2200)} />
            </div>
        );
    }
}
export default Login