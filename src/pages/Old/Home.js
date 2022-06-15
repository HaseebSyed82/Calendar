import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import ZoomPart from "./ZoomAPI"
import useStyle from "../reactFrames/useStyle"

class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: '',
      username: '',
      guestname: '',
      guestemail: '',
      checkin: null,
      age: 0,
    }
    this._onSelect = this._onSelect.bind(this)
  }

 mySubmitHandler = (event) => {
    event.preventDefault();
    /*
    let age = this.state.age;
    if (!Number(age)) {
      alert("Your age must be a number");
    }
    */
    let chkdate = this.state.checkin;
    if (!(chkdate.getTime() === this.getTime())) {
      alert("Appointment Date must be in date format");
    }   
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

 _onSelect(option) {
    this.setState({ selected: option })
  }

// {this.state.guestname} {this.state.guestemail} {this.state.checkin}

  render() {
    const defaultOption = this.state.selected
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h4>Request an Appointment</h4>
        <div class="form-body">
          <div class="section">
            <label for="guestname" class="field-label" id="wLbl2">Please Enter Your Name</label>
            <label for="guestname" class="field prepend-icon">
              <input type="text" name="guestname" 
              id="guestname" class="gui-input" required="" placeholder="John Doe/Jane Doe"  id="wLbl3"
              onChange={this.myChangeHandler} />
              <span class="field-icon"><i class="user"></i></span>
            </label>
          </div>
          <div class="form">
            <div class="section colm colm6">
              <label for="guestemail" class="field-label" id="wLbl2">Email Address</label>
              <label for="guestemail" class="field prepend-icon">
                <input type="email" name="guestemail" 
                id="guestemail" class="gui-input" required="" placeholder="john@something.com" id="wLbl3"
                onChange={this.myChangeHandler} />
                <span class="field-icon"><i class="email"></i></span>
              </label>
            </div>
          </div>
          <div class="form">
            <div class="section colm colm6">
              <label for="checkin" class="field-label" id="wLbl2">Appointment Date</label>
              <label for="checkin" class="field prepend-icon">
                <input type="date"  name="checkin" placeholder="mm/dd/yyyy" id="wLbl3"
                onChange={this.myChangeHandler} />
                <span class="field-icon"><i class="fa fa-calendar"></i></span>
              </label>
            </div>
          </div>
          <div class="spacer-t20 spacer-b30">
            <div class="tagline"><span>Please answer these questions to ensure proper appointment type is booked</span></div>
          </div>
          <div class="form">
            <div class="option-group field">
              <div class="section colm colm6">
                <label class="switch" id="wLbl">
                  <input type="checkbox" name="switch1" id="switch1" value="switch1" />
                  <span class="switch-label" data-on="YES" data-off="NO"></span>
                  <span>click to request reoccurring appointment</span>
                </label>
              </div>
            </div>
          </div>
          <div class="questions">
            <label for="comment"  id="wLbl" class="field-label">What type of appointment? (Consulting, office hours, tutoring, counseling)</label>
            <label for="comment" class="field prepend-icon" id="wLbl">
                  <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                  <br></br>
                  {placeHolderValue == options[0] && <MyOffice />}
                  {placeHolderValue == options[1] && <MyConsulting />}
                  {placeHolderValue == options[2] && <MyOther />}
              <span class="field-icon"><i class="request type"></i></span>
            </label>
          </div>
        </div>
        <div class="form-footer">
          <button type="submit" class="button btn-primary">Request Appointment</button>
          <button type="reset" class="button">Cancel</button>
        </div>
      </form>
    );
  }
}

const options = ['Office hours', 'Consulting hours', 'Other Hours']

function MyOffice() {
  return (
    <>
      <h2>My Office Hours</h2>
      <h3>Monday's - 9am to 10am and 3pm to 4pm</h3>
      <h3>Wednesday's - 10am to 11am and 4pm to 5pm</h3>
    </>
  );
}

function MyConsulting() {
  return (
    <>
      <h2>My Consulting Hours</h2>
      <h3>Tuesday's from 8am to 12pm and 1pm to 3:30pm</h3>
    </>
  );
}

function MyOther() {
  return (
    <>
      <h2>My Other Hours</h2>
      <h3>I am available via phone and appointment during normal buisness hours Monday through friday </h3>
      <h3>Should you need me outside of normal business hours, email and I will do my best to get back to you as soon as possible</h3>
    </>
  );
}

function Home() {
  useStyle("app.css");
  return (
    <>
      <MyForm />
    </>
  );
}

export default Home;