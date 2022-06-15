import React, { Component } from 'react';

// const LoginContext = React.createContext('true');

function UserGreeting(props) {
  return <h1>Welcome back{(props.myName.length>0)?", " + props.myName:null}!</h1>;
}
function GuestGreeting(props) {
  return <h1>Please sign in.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  const myName = props.myName;
  if (isLoggedIn) {return <UserGreeting myName={myName}/>;}  return <GuestGreeting />;}

/*
const UserContext = createContext({
  loggedin: '',
  updateLogin: () => {},
});
*/

class Login extends Component {
  /*
  updateLogin = newLogin => {
    this.setState({ loggedin: newLogin });
  };
  */

  state = {
    loggedin: "Log In",
    username: "",
    password: ""
  }

/*
  componentDidMount() {
      let value = this.context;
      // perform a side-effect at mount using the value of MyContext
    }
  componentDidUpdate() {
      let value = this.context;
    }
  componentWillUnmount() {
      let value = this.context;
  }
*/

  increment = () => {
    // this.isLoggedIn=(!this.isLoggedIn);
    if (!this.isLoggedIn) {      
      this.setState({loggedin: "Log Out"});
      this.isLoggedIn=true;
      } else {      
      this.setState({loggedin: "Log In"});
      this.setState({username: ""});
      this.setState({password: ""});
      this.isLoggedIn=false;    
      }
      // this.props.update(this.isLoggedIn);
  }

  handleNameChange=(e)=>{
    this.setState({username:e.target.value})
  }

  handlePwdChange=(e)=>{
    this.setState({password:e.target.value})
  }

  handleLoginChange=()=>{
        if (!this.isLoggedIn) {      
        this.setState({loggedin: "Log Out"});
        this.isLoggedIn=true;
        } else {      
        this.setState({loggedin: "Log In"});
        this.setState({username: ""});
        this.setState({password: ""});
        this.isLoggedIn=false;    
        }
  }

  render() {
    let value = this.context;
    /* render something based on the value of MyContext */
    return <div>
    <Greeting isLoggedIn={this.isLoggedIn} myName={this.state.username} />
    {
      this.state.username.length > 0 && 
      <p>Username: {this.state.username}</p>
    }
    {
      this.state.password.length > 0 && 
      <p>Password: {this.state.password}</p>
    }
    { !this.isLoggedIn && 
      <p>
      <label>Username&nbsp;&nbsp; </label>
      <input type="text" placeholder="Enter your name" value={this.state.username} onChange={this.handleNameChange} /><br></br>
      <label>Password&nbsp;&nbsp;</label>
      <input type="password" placeholder="Enter your password" value={this.state.password} onChange={this.handlePwdChange} /><br></br>
      </p>}
    <button onClick={this.increment}>{this.state.loggedin}</button>
    </div>;
  }
}

// Login.contextType = MyContext;
export default Login;

//export const UserLogin = this.state.loggedin;