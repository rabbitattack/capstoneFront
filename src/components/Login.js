import React from 'react';
import Landing from './Landing';
import { Link } from "react-router-dom";
import { FormGroup, Input, Button } from 'reactstrap';

class Login extends React.Component {

    login = () => {

    }

    render() {
        console.log('login again')
        return (
            <div>
                <FormGroup>
                    <Input placeholder='name'
                        value="userName"
                        onChange={this.handleChange} />
                    <Input placeholder='value'
                        value="Password"
                        onChange={this.handleValue} />
                    <Button onClick={this.addItem}>Login</Button>
                </FormGroup>
                <p className="link">Hello Conrad</p>
            </div>
        );
    }
}
export default Login