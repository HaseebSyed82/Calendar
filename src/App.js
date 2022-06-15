import React, { useContext, createContext, useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Frames from "./reactFrames/Frames"
import Frame from "./reactFrames/Frame"
import Frameset from "./reactFrames/Frameset"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Header from "./pages/Header"
//import Login from "./Login"
import UserPart from "./pages/UserPart"
import PwdReset from "./pages/PwdReset"
import Registration from "./pages/Register"
//import FrameContext from "./reactFrames/FrameContext";
//import useStyle from "./reactFrames/useStyle";
//import * as React from 'react'
import * as ReactDOM from 'react-dom'
//import useStyle from "./reactFrames/useStyle"
// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

//var myUser = ""
//var myPwd = ""

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();
function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}
function useAuth() {
  return useContext(authContext);
}
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };
  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };
  return {
    user,
    signin,
    signout
  };
}
function AuthButton() {
  let history = useHistory();
  let auth = useAuth();
  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
function ResetPage() {
	let framePropsReset = {
		stylesheet: "app.css" // Re-used stylesheet for Password Reset
	};
  return (
    <div> 
    <Frames>
			 <Frameset>
					<Frame name="main" {...framePropsReset}>            
						 <PwdReset />
					</Frame>
				</Frameset>
		</Frames> 
    </div>
  );
}

function RegisterPage() {
	let framePropsReg = {
		stylesheet: "app.css" // Stylesheet for Registration was PwdReset.css
	};
  return (
    <div>
      <Frames>
			 <Frameset>
					<Frame name="main" {...framePropsReg}>            
						 <Registration />
					</Frame>
				</Frameset>
		</Frames>   
    </div>
  );
}

function ProtectedPage() {
  let [frameBorder, setFrameBorder] = useState(true); // use frame border
	let [noResize, setNoResize] = useState(false);      // don't allow resize
	let [scrolling, setScrolling] = useState(true);     // allow scrolling
	let headerProps = {
		frameBorder,
		setFrameBorder,
		noResize,
		setNoResize,
		scrolling,
		setScrolling
	};
	let frameProps = {
		frameBorder,
		noResize,
		scrolling,
		stylesheet: "app.css" // Shared stylesheet for all frames
	};
  let frameProps2 = {
		frameBorder,
		noResize,
		scrolling,
		stylesheet: "app.css" // Shared stylesheet for all frames
	};
  return (
    <div>
      <h2>Protected page for user '{this.myUser}'</h2>
      	<Frames title="React Frames">
			 <Frameset rows="30,*" key={frameBorder}>
				<Frame name="header" {...frameProps}>
					<Header {...headerProps} />               
				</Frame>
				<Frameset cols="150,*">
					<Frame name="nav" {...frameProps}>
          {(this.myUser == "admin" && this.myPwd == "pwd") &&
            <Menu />
          }
          {!(this.myUser == "admin" && this.myPwd == "pwd") &&
            <UserPart />
          }
          </Frame>
					<Frame name="main" {...frameProps2}>            
						<Home />
					</Frame>
				</Frameset>
			</Frameset>
		</Frames>
    </div>
    );
}

function useInput({ type, placeHold }) {
   const [value, setValue] = useState("");
   const input = <input placeholder={"Enter your " + placeHold} value={value} onChange={e => setValue(e.target.value)} type={type} />;
   return [value, input];
 }

function LoginPage() {
  const [userName, setUser] = useInput({ type: "text", placeHold: "name" });
  const [passWord, setPwd] = useInput({ type: "password", placeHold: "password" });
  // const [isLoggedIn, setLogin] = useState(false);

  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();
  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    this.myUser=userName;
    this.myPwd=passWord;
    auth.signin(() => {      
      history.replace(from);      
    })
    
  };
  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
    {
      (userName == "admin" && passWord == "pwd") && 
      <h2>Valid Admin login!</h2>
    }
    { !this.isLoggedIn && 
      <p>
      <label>Username:&nbsp;</label>
      {setUser}<br></br>
      <label>Password:&nbsp;</label>
      {setPwd}
      <br></br>
      <br></br>
      </p>}
      <button onClick={login}>Log in</button>
    </div>
  );
}
// const el = <Counter />;
const App = () => {
  return (
    <div>
    <h1>Calendar Project Group 9</h1>
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li>
              <Link to="/reset">Reset Password</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/protected"><mark>Login Protected</mark></Link>
            </li>
          </ul>
          <Switch>
            <Route path="/reset">
              <ResetPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/protected">
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
    </div>
  );
}
ReactDOM.render(
  <div className="App">
    <App/>
  </div>,
  document.getElementById('root')
);