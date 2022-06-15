import React, { Component } from 'react';
import { render } from 'react-dom';
import Link from "../reactFrames/Link";
import useStyle from "../reactFrames/useStyle";

//Register module

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class RegisterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      email2: null,
      password: null,
      password2: null,
      myText: "Registering actions shown here",
      errors: {
        fullName: '',
        email: '',
        email2: '',
        password: '',
        password2: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName':
        errors.fullName =
          value.length < 5
            ? 'Full Name must be 5 characters long!'
            : '';
        break;
      case 'email':
        errors.email =
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
          value != this.state.email
            ? 'Email doesn\'t match!'
            : '';          
      break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        errors.password2 =
          value != this.state.password2
            ? 'Password doesn\'t match!'
            : ''; 
        break;
      case 'password2':
        errors.password2 =
          value != this.state.password
            ? 'Password doesn\'t match!'
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
      this.setState({ myText: "Valid Form: Registering User" })
    } else {
      this.setState({ myText: "Invalid Form: Registering User" })
    }
  }

  resetMe = () => {
    this.setState({ myText: "Form Cleared" });
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <h2>Register</h2>
        <hr />

        <div className='fullName'>
          <label htmlFor="fullName" 
            class="rgstr">Full Name:</label>
          <input type='text' name='fullName' 
          class="reginput"
          onChange={this.handleChange} noValidate />
          {errors.fullName.length > 0 &&
            <span className='error'>{errors.fullName}</span>}
        </div>

        <div className='email'>
          <label htmlFor="email" 
            class="rgstr">Email Address:</label>
          <input type='email' name='email'
            class="reginput"
          onChange={this.handleChange} noValidate />
          {errors.email.length > 0 &&
            <span className='error'>{errors.email}</span>}
        </div>

        <div className='email2'>
          <label htmlFor="email2" 
            class="rgstr">Re-Enter Email Address:</label>
          <input type='email' name='email2'
            class="reginput"
          onChange={this.handleChange} noValidate />
          {errors.email2.length > 0 &&
            <span className='error'>{errors.email2}</span>}
        </div>

        <div className='password'>
          <label htmlFor="password" 
            class="rgstr">Password:</label>
          <input type='password' name='password' 
          class="reginput"
          onChange={this.handleChange} noValidate />
          {errors.password.length > 0 &&
            <span className='error'>{errors.password}</span>}
        </div>

        <div className='password2'>
          <label htmlFor="password2" 
            class="rgstr">Re-Enter Password:</label>
          <input type='password' name='password2' 
            class="reginput"
          onChange={this.handleChange} noValidate />
          {errors.password2.length > 0 &&
            <span className='error'>{errors.password2}</span>}
        </div>

        <div class="form-footer">
          <button type="submit" 
            class="regbtn">Register</button>
          <button type="reset" onClick={this.resetMe} 
            class="regbtn">Reset Form</button>
        </div>
        <mark>{this.state.myText}</mark>
      </form>
    );
  }
}

function Page5() {
  //useStyle("app.css");

  return (
    <>
      <RegisterClass />
    </>
  );
}

export default Page5;