import React, { Component } from 'react';
import { FormGroup, Input, Button } from 'reactstrap';

export default class PaymentForm extends React.Component {
    state = {
        name: '',
        value: '',
    }
    handleValue = (event) => {
        this.setState({ value: event.target.value });
    }

    handleChange = (event) => {
        this.setState({ name: event.target.value });
    }

    addItem = (event) => {
        console.log('addItem.state', this.state)
        this.props.addPayment({
            name: this.state.name,
            value: this.state.value,
        })
    }
    render() {
        return (
            <FormGroup>
                <Input placeholder='name'
                    value={this.state.name}
                    onChange={this.handleChange} />
                <Input placeholder='value'
                    value={this.state.value}
                    onChange={this.handleValue} />
                <Button onClick={this.addItem}>Test</Button>
            </FormGroup>);
    }
}