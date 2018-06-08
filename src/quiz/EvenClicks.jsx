// Create a component <EvenClicks> that displays "Even" if it's been clicked an even number of times and "Odd" if it's been clicked an odd number of times.

import React, { Component } from "react";

class EvenClicks extends Component {
  constructor(props) {
    super(props)

    this.state = {
      even: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState ({
      even: !this.state.even
    })
  }

  render() {
    const { even } = this.state;
    let EvOdd;

    even ? EvOdd = "hotpink" : EvOdd = "lightgreen"

    return (
      <React.Fragment>
        <h4>Question 2</h4>
        <p onClick={ this.handleClick } style={{ color: EvOdd }}>{ even ? "Even" : "Odd" }</p>
      </React.Fragment>
    );
  }
}

export default EvenClicks;
