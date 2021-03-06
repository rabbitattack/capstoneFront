import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PaymentForm from './PaymentForm';

class Bills extends React.Component {
    state = {
        income: [],
        expense: [
            {
                name: 'rent',
                amount: 1000,
            },
            {
                name: 'rent',
                amount: 1000,
            },
            {
                name: 'rent',
                amount: 1000,
            },
        ]
    }

    addAccounts = (account) => {
        return account.reduce((total, entry) => {
            return total + entry.amount
        }, 0)
    }

    onClickHandler = () => {
        console.log('on click handler working', this.addAccounts(this.state.expenses))
    }

    render() {
        return (
            <div className="loginForm">
                <Form onSubmit={event => event.preventDefault()}>
                    <h3>Bills</h3>
                    <PaymentForm addPayment={({ value, name }) => {
                        const expense = this.state.expense;
                        this.setState({ expense: expense.concat([{ value, name }]) })
                    }} />
                </Form >
            </div>
        )
    }
}

export default Bills