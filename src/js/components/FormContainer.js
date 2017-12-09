import React from 'react';

import SingleInput from './SingleInput.js';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      phone: "",
      gender: "",
      dayOfBirth: "",
      monthOfBirth: "",
      yearOfBirth: "",
      description: ""
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  handleFormSubmit() {

  }

  handleFormClear() {

  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleSurnameChange(e) {
    this.setState({surname: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePhoneChange(e) {
    this.setState({phone: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <SingleInput name="name" inputType="text" content={this.state.name} func={this.handleNameChange} placeHolder="Type your name" title="Name: " />
        <SingleInput name="surname" inputType="text" content={this.state.surname} func={this.handleSurnameChange} placeHolder="Type your surname" title="Surname: " />
        <SingleInput name="email" inputType="text" content={this.state.email} func={this.handleEmailChange} placeHolder="Type your e-mail" title="E-mail: " />
        <SingleInput name="phone" inputType="text" content={this.state.phone} func={this.handlePhoneChange} placeHolder="Type your phone number" title="Phone: " />
        <input type="submit" value="Submit" />
        <button onClick={this.handleFormClear}>Clear</button>
      </form>
    )
  }
}

export default FormContainer;
