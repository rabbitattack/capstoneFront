import React from 'react';
// import Landing from '/components/landing.js';
import { Link } from "react-router-dom";

class Login extends React.Component {

    login = () => {

    }

    render() {
        return (
            <ul>
                <li>
                    <Link to="/Landing">Home</Link>
                </li>
            </ul>

        );
    }
}
export default Login