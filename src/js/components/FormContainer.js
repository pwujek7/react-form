import React from 'react';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      telephone: "",
      gender: "",
      dayOfBirth: "",
      monthOfBirth: "",
      yearOfBirth: "",
      description: ""
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
  }

  handleFormSubmit() {

  }

  handleFormClear() {

  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input type="submit" value="Submit"/>
        <button onClick={this.handleFormClear}>Clear</button>
      </form>
    )
  }
}

export default FormContainer;
