import React, { Component } from 'react';

import Multiplier from './quiz/Multiplier';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="jumbotron">
          <h1>Quiz!</h1>
        </header>
        <Multiplier x={ 5 } y={ 7 }/>
      </React.Fragment>
    );
  }
}

export default App;
