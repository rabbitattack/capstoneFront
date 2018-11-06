import React from 'react';
// import Landing from '/components/landing.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends React.Component {

    login = () => {

    }

    render() {
        return (
            <Router>
                <ul>
                    <Link to="/Landing.js">Home</Link>
                </ul>
            </Router>
        );
    }
}
export default Login