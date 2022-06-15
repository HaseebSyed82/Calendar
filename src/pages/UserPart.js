import React, { Component } from 'react';
import Link from "../reactFrames/Link";
import ZoomPart from "./ZoomAPI";
import AskAdmin from "./AskAdmin"; // Danger button -- Ask Admin
import ApptType from "./Home" // Appointment types
import Approve from "./ApproveAppts"
import MyAvail from "./Avail"

var imgSrc = '/images/CalendarLogo.png'

function MyCalendar() {
	return (
		<>
      <img src={imgSrc} alt="logo" /> 
		</>
	);
}

class UserPartClass extends Component {
  state = {
    myText: "User actions will be shown here",
    myModule: ""
  }
  askAdmin = () => {
    this.setState({myText: "Ask Admin clicked",
    myModule: ""});
  }
  viewCalendar = () => {
    this.setState({myText: "View Calendar clicked",
    myModule: <MyCalendar />});
  } 
  viewApptTypes = () => {
    this.setState({myText: "View Appointment Types clicked",
    myModule: ""});
  }  
  zoomSetup = () => {
    this.setState({myText: "Zoom Setup clicked",
    myModule: <ZoomPart />});
  }
  scheduleAppointment = () => {
    this.setState({myText: "Schedule appointment clicked",
    myModule: ""});
  }
  returnHome = () => {
    this.setState({myText: "Return to Menu",
    myModule: ""});
  }
  //<button onClick={this.askAdmin}>Ask Admin</button>
  //<button onClick={this.zoomSetup}>Zoom Setup</button>
  //<button onClick={this.viewCalendar}>View Calendar</button>
  //<button onClick={this.viewApptTypes}>View Appointment Types</button>
  //<button onClick={this.scheduleAppointment}>Schedule Appointment</button>
  render() {
    return (
		<>      
      <Link target="main" component={AskAdmin}>
					Ask Admin
			</Link>
      <br></br>
      <Link target="main" component={MyAvail}>
					View Calendar
			</Link>
      <br></br>  
      <Link target="main" component={ApptType}>
					View Appointment Types
			</Link>
      <br></br>    
      <Link target="main" component={Approve}>
					Approve Appointments
			</Link>  
      <br></br>     
      <Link target="main" component={ZoomPart}>
					Zoom Setup
			</Link>
      <br></br>
      <mark>{this.state.myText}</mark>
      {this.state.myModule}
		</>
	);
  }
}

function UserPart() {
	return (
		<>
      <UserPartClass />
		</>
	);
}

export default UserPart;