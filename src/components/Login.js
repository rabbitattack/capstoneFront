import React from 'react';
import Landing from './Landing';
import { Link } from "react-router-dom";
import { FormGroup, Input, Button } from 'reactstrap';



class Login extends React.Component {
    state = {
        username: "",
        password: "",
        expense: 0
    }

    componentDidMount() {
        fetch('https://capstone-uber.herokuapp.com/api/uber')
            .then(response => response.json())
            .then(response =>

                this.setState({
                    username: response[0].username,
                    password: response[0].password,
                    expense: response[0].expense
                }))
    }



    onInputChange = e => this.setState({ [e.target.name]: e.target.value });

    onLogin = e => {
        e.preventDefault();
        const { username, password } = this.state;
        this.setState({
            username: "",
            password: ""
        });
        const userData = {
            username,
            password
        };

        this.addUser(userData);
    };


    addUser = async payload => {
        console.log(payload)
        const response = await fetch('https://capstone-uber.herokuapp.com/api/uber', {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json"
            }),
            body: JSON.stringify(payload)
        });
        const User = await response.json();

        console.log("User received", User);

    }


    render() {
        console.log('state changed', this.state)
        return (
            <div className="loginForm">
                <FormGroup>
                    <Input
                        placeholder='Username'
                        name="username"
                        value={this.state.username}
                        onChange={this.onInputChange}
                    />
                    <Input
                        placeholder='Password'
                        name="password"
                        value={this.state.password}
                        onChange={this.onInputChange}

                    />
                    <Button onClick={this.onLogin}><Link to="/Landing">Login</Link></Button>
                </FormGroup>
            </div>
        );
    }
}
export default Login