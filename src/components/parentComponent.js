import React from 'react';
import DisplayData from './DisplayData';

import Form from './Form'

export default class ParentComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
    }

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        })
    } 
//     handleSubmit = event => {
//     event.preventDefault()
//     let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
//     this.sendFormDataSomewhere(formData)
//   }
    render() {
        return (
            <div>
                <Form 
                    formData = {this.state}
                    handleFirstNameChange={this.handleFirstNameChange}
                    handleLastNameChange = {this.handleLastNameChange}
                /> 
                <DisplayData formData={this.state} />
            </div>
            
        )
    }
}