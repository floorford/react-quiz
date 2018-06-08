// Create a component <MinimumLength length={ 30 }> that contains an <input>. The user should see a warning, "Too short!", unless they have entered at least length characters.

import React, { Component } from "react";

class MinimumLength extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const { value } = this.state
    const { length } = this.props

    let warning;
    value.length < length ? warning = "Too short!" : warning = ""

    return (
      <React.Fragment>
      <h4>Question 5</h4>
      <p>Make your input <strong>at least</strong> { length } characters long:</p>
      <input onChange={ this.handleChange } className="form-control" value={ value }></input>
      <p className="help-block">{ warning }</p>
      </React.Fragment>
    );
  }
}

export default MinimumLength;
