import React, { Component } from 'react';

class AdminPartClass extends Component {
  state = {
    myText: "Admin actions shown here"
  }
  askAdmin = () => {
    this.setState({ myText: "Calendar open" });
  }
  dailyAvail = () => {
    this.setState({ myText: "Daily Availability Setup clicked" });
  }
  apptTypes = () => {
    this.setState({ myText: "Appointment Type Setup clicked" });
  }

  render() {
    return (
      <>
        <br></br>
        <button onClick={this.askAdmin}>Open Calendar</button>
        <br></br>
        <button onClick={this.dailyAvail}>Setup Daily Availability</button>
        <br></br>
        <button onClick={this.apptTypes}>Appointment Type Setup</button>
        <br></br>
        <br></br>
        {this.state.myText}
      </>
    );
  }
}

function AdminPart() {
  return (
    <>
      <AdminPartClass />
    </>
  );
}

export default AdminPart;