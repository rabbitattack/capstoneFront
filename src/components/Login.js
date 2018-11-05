import React from 'react';

class Login extends React.Component {

    login = () => {
        console.log("Button was clicked G!")
    }

    render() {
        return (
            <button onClick={this.login} className='login'>Click Me!</button>
        );
    }
}
export default Login