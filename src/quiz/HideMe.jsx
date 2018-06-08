// Create a component <HideMe>Blah blah blah</HideMe> that uses children to accept some content. When the component is clicked the content should be hidden.

import React, { Component } from "react";

class HideMe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      display: "block"
    }

    this.handleClick =  this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      display: "none"
    })
  }

  render() {
    let { children } = this.props;

    return(
      <React.Fragment>
        <h4>Question 4</h4>
        <p onClick={ this.handleClick } style={{display:` ${this.state.display}`}}>{ children }</p>
      </React.Fragment>
    );
  }
}

export default HideMe
