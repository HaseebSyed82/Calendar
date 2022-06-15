import React, { Component } from 'react';

class DangerButton extends Component {
  state = {
    mytext: "Submit Request"
  }
  increment = () => {
    this.setState({mytext: this.state.mytext+" More!"});
  }
  render() {
    return <div>
    <br></br>
    <button onClick={this.increment} class="widebtn">{this.state.mytext}</button>
      {this.state.mytext.length > 20 && this.state.mytext.length <= 50 &&
        <h2>
          You can stop now! 🤣
        </h2>
      }
      {this.state.mytext.length > 50 && this.state.mytext.length <= 80 &&
        <h2>
          What are you doing?! 😠
        </h2>
      }
      {this.state.mytext.length > 80 &&
        <h2>
          I kid! I kid! 😉
        </h2>
      }
    </div>;
  }
}

export default DangerButton;