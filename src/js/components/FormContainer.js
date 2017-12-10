import React from 'react';

import SingleInput from './SingleInput.js';
import DropDown from './DropDown.js';
import RadioGroup from './RadioGroup.js';
import TextArea from './TextArea.js';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      phone: "",
      gender: "",
      genderSelection: ["Male", "Female"],
      dayOfBirth: "",
      daySelection: [],
      monthOfBirth: "",
      monthSelection: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      yearOfBirth: "",
      yearSelection: [],
      description: ""
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleDaySelect = this.handleDaySelect.bind(this);
    this.handleMonthSelect = this.handleMonthSelect.bind(this);
    this.handleYearSelect = this.handleYearSelect.bind(this);
    this.handleGenderSelect = this.handleGenderSelect.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  componentDidMount() {
    function arrayOfDays() {
      let days = [];
      for (var i = 1; i <=31; i++) {
        if (i < 10) {
          i = parseInt(`0${i}`);
        }
        days.push(i);
      }
      return days;
    }

    function arrayOfYears() {
      let years = [];
      let currentYear = (new Date()).getFullYear();
      for (var i = 1900; i <= currentYear; i++) {
        years.push(i);
      }
      return years;
    }

    this.setState({
      daySelection: arrayOfDays(),
      yearSelection: arrayOfYears()
    });
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

  handleDaySelect(e) {
    this.setState({dayOfBirth: e.target.value});
  }

  handleMonthSelect(e) {
    this.setState({monthOfBirth: e.target.value});
  }

  handleYearSelect(e) {
    this.setState({yearOfBirth: e.target.value});
  }

  handleGenderSelect(e) {
    this.setState({gender: e.target.value});
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <SingleInput name="name" inputType="text" content={this.state.name} func={this.handleNameChange} placeHolder="Type your name" title="Name: " />
        <SingleInput name="surname" inputType="text" content={this.state.surname} func={this.handleSurnameChange} placeHolder="Type your surname" title="Surname: " />
        <SingleInput name="email" inputType="text" content={this.state.email} func={this.handleEmailChange} placeHolder="Type your e-mail" title="E-mail: " />
        <SingleInput name="phone" inputType="text" content={this.state.phone} func={this.handlePhoneChange} placeHolder="Type your phone number" title="Phone: " />
        <DropDown name="day" selectedOption={this.state.dayOfBirth} func={this.handleDaySelect} placeHolder="Day" options={this.state.daySelection} />
        <DropDown name="month" selectedOption={this.state.monthOfBirth} func={this.handleMonthSelect} placeHolder="Month" options={this.state.monthSelection} />
        <DropDown name="year" selectedOption={this.state.yearOfBirth} func={this.handleYearSelect} placeHolder="Year" options={this.state.yearSelection} />
        <RadioGroup title="Choose your gender" name="gender" func={this.handleGenderSelect} type="radio" options={this.state.genderSelection} selectedOption={this.state.gender} />
        <TextArea title="Write something about yourself" name="description" content={this.state.description} func={this.handleDescriptionChange} rows={7} placeHolder="Your description" />
        <input type="submit" value="Submit" />
        <button onClick={this.handleFormClear}>Clear</button>
      </form>
    )
  }
}

export default FormContainer;
