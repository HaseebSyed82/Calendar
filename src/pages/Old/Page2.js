import React from "react";
import Link from "../reactFrames/Link";
import Page1 from "./Page1";
import Page3 from "./Page3";
//import Page4 from "./Page4";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {    this.setState({      date: new Date()    });  }
  render() {
    return (
      <div>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

function Page2() {
	return (
		<>
			<h2>Clock</h2>
      <Clock />
		</>
	);
}

export default Page2;