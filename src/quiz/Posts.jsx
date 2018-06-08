// Create a component <Posts> that consists of a list of items that have a title and some text. Underneath the list of items should be a <Form> component that has a "Title" and "Text" input and a "Submit" button.
//
// You should only be able to submit the form if all the inputs have something typed in them.
// When the form is submitted it should add a new item to the list of posts.
// When the form is submitted the form fields should become blank
// The inputs should be controlled by the <Form> component and only pass their values up to <Posts> when the <form>'s onSubmit event handler is fired.
// If there are no posts it should say "No posts"
// Feel free to make other components if it makes sense to do so
// Make it so that <Posts> is visible if you visit the root route (i.e. /)

import React, { Component } from "react";
import Form from './Form';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formFields: [
        { label: "Title", name: "title", value: "" },
        { label: "Text", name: "text", value: "" }
      ],
      postFields: [
        { title: "Hello", text: "Blah blah, blah blah blah" },
        { title: "Potato", text: "Blah blah blahblah blah!" }
      ]
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e, i) {
  // allowing the title or text input to change, storing the input in corresponding value of form fields

    let formFields = this.state.formFields.slice();

    formFields[i].value = e.target.value;

    this.setState({
      formFields: formFields
    });
  }

  handleClick() {
    // taking both values of the form fields and assigning them to the corresponding values of a new object in the post fields

    let formFields = this.state.formFields.slice();
    let postFields = this.state.postFields.slice();

    let newPost = { title: formFields[0].value, text: formFields[1].value }
    formFields.map( a => a.value = "")

    this.setState({
      formFields: formFields,
      postFields: postFields.concat(newPost)
    });
  }

  render() {
    const { formFields, postFields } = this.state;

    return (
      <React.Fragment>
        <h2>Tricksy Question</h2>
        { postFields.length === 0 ? <h4 style={{ color:"hotpink" }}>There are no posts, make one below!</h4> :
        <ul className="list-group">
          { postFields.map((a, i) => (
            <li className="list-group-item" key={ i }><Post title={a.title} text={a.text}/></li>
          ))}
        </ul>
        }
        <Form
          formFields={ formFields }
          onClick={ this.handleClick }
          onChange={ this.handleChange }
        />
      </React.Fragment>
    );
  }
}

export default Posts;

// could put state of input inside form component itself
// the onChange bit is dealt with internally in the form and only the onClick is passed down to the form
