// Create a component <CountBy step={ 5 }> that takes a step prop. It should display a number (starting at 0) inside a <p>. Every time it is clicked the number should go up by step.

import React, { Component } from "react";

class CountBy extends Component {
  constructor(props) {
    super(props)

    this.state = {
      number: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState ({
      number: this.state.number + +this.props.step
    })
  }

  render() {
    const { number } = this.state
    let { step } = this.props
    return(
      <React.Fragment>
        <h4>Question 3</h4>
        <p>Please count up by { step }:</p>
        <p onClick={ this.handleClick }>{ number }</p>
      </React.Fragment>
    );
  }
}

export default CountBy;
