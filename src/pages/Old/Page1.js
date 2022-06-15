import React from "react"
import useStyle from "../reactFrames/useStyle"

//Counter module

class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({counter: this.state.counter+1});
  }
  render() {
    return <div>
    <p>{this.state.counter}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}

function Page1() {
  //useStyle("LeftButton.css");
	return (
		<>
			<h2>Counter</h2>
      <Counter />
		</>
	);
}

export default Page1;