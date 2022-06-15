import React, { Component } from 'react';
import { render } from 'react-dom';
import Link from "../reactFrames/Link";
import useStyle from "../reactFrames/useStyle";

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class PwdResetClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email1: null,
      email2: null,
      myText: "Password Reset actions shown here",
      errors: {
        email1: '',
        email2: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'email1':
        errors.email1 =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        errors.email2 =
          value != this.state.email2
            ? 'Email doesn\'t match!'
            : '';
        break;
      case 'email2':
        errors.email2 =
          value != this.state.email1
            ? 'Email doesn\'t match!'
            : '';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      this.setState({ myText: "Valid Form: Sending Reset Password Link" })
    } else {
      this.setState({ myText: "Invalid Form: Fix Errors" })
    }
  }

  resetPwd = () => {
    this.setState({ myText: "Sending Reset Password Link" });
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
  }

  resetMe = () => {
    this.setState({ myText: "Form Cleared" });
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <h2>Enter Email Address to Reset Password</h2>
        <hr />

        <div className='email1'>
          <label htmlFor="email1" 
            className="rgstr">Email Address:</label>
          <input type='email' name='email1' 
            className="reginput"
            onChange={this.handleChange} noValidate />
          {errors.email1.length > 0 &&
            <span className='error'>{errors.email1}</span>}
        </div>

        <div className='email2'>
          <label htmlFor="email2"
            className="rgstr">Re-Enter Email Address: </label>
          <input type='email' name='email2' 
            className="reginput"
          onChange={this.handleChange} noValidate />
          {errors.email2.length > 0 &&
            <span className='error'>{errors.email2}</span>}
        </div>

        <div className="form-footer">
          <button onClick={this.resetPwd} 
            className="regbtn">Send Reset Link</button>
          <button type="reset" 
            className="regbtn" onClick={this.resetMe}>Reset Form</button>
        </div>
        <p><mark>{this.state.myText}</mark></p>
      </form>
    );
  }
}

function PwdReset() {
  useStyle("app.css");

  return (
    <>
      <PwdResetClass />
    </>
  );
}

export default PwdReset;