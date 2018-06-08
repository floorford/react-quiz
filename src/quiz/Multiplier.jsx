// Create a component <Multiplier x={ 5 } y={ 7 } /> that takes two props, x and y, and outputs their product (i.e. x × y) in a <p>.

import React from "react"

const Multiplier = ({ x, y }) => (
  <React.Fragment>
  <h4>Question 1</h4>
  <p>{ x } &times; { y } = { x * y }</p>
  </React.Fragment>
)

export default Multiplier;
