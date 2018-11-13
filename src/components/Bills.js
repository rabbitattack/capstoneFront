import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


// toDatabase = () => {

// }

class Bills extends React.Component {
    state = {
        expenses: [
            { name: 'rent' },
            { amount: 1000 },
            { frequency: 'Monthly' },
        ]
    }


    render() {
        return (
            <Form>
                <FormGroup>
                    <h1>Enter your monthly expenses</h1>
                    <Label for="exampleEmail">Expense Name</Label>
                    <Input type="text" name="expenses" id="exampleEmail" />
                    <Button name="expenses" className="expButton" onClick={this.state.expenses[0].name}>Add Exp</Button>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Expense Monthly Amount</Label>
                    <Input type="integer" name="expenseAmount" id="examplePassword" />
                    <Button name="expenseAmount" className="addExp" onClick={this.state.expenses[1].amount}>Add Amount</Button>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="expense" id="exampleSelect" >
                        <option>Fixed Expense</option>
                        <option>Temporary Expense</option>
                        <option>Single Payment</option>
                        <option>Upcoming Expense</option>
                    </Input>
                    <Button name="expense" className="expense" onClick={this.state.expenses[1].frequency}>Add Expense</Button>
                </FormGroup>
            </Form >
        )
    }
}

export default Bills