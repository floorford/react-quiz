// Create a component <Posts> that consists of a list of items that have a title and some text. Underneath the list of items should be a <Form> component that has a "Title" and "Text" input and a "Submit" button.

import React from "react";

const Input = ({ label, name, value, onChange }) => {

  return (
    <React.Fragment>
      <label>{ label }:</label>
      <input
         className="form-control" name={ name } value={ value } onChange={ onChange }>
      </input>
      <br/>
    </React.Fragment>
  )
};

export default Input;
