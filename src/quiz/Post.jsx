// Create a component <Posts> that consists of a list of items that have a title and some text. Underneath the list of items should be a <Form> component that has a "Title" and "Text" input and a "Submit" button.
//
// You should only be able to submit the form if all the inputs have something typed in them.
// When the form is submitted it should add a new item to the list of posts.
// When the form is submitted the form fields should become blank
// The inputs should be controlled by the <Form> component and only pass their values up to <Posts> when the <form>'s onSubmit event handler is fired.
// If there are no posts it should say "No posts"
// Feel free to make other components if it makes sense to do so
// Make it so that <Posts> is visible if you visit the root route (i.e. /)

import React from "react";

const Post = ({ title, text }) => {

  return (
    <div className="container">
      <h3>{ title }</h3>
      <p>{ text }</p>
    </div>
  )
}

export default Post;
