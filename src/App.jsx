import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

// ---------------- Component Imports ------------------
import Multiplier from './quiz/Multiplier';
import EvenClicks from './quiz/EvenClicks';
import CountBy from './quiz/CountBy';
import HideMe from './quiz/HideMe';
import MinimumLength from './quiz/MinimumLength';
import Posts from './quiz/Posts';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <header className="jumbotron" style={{textAlign: "center"}}>
            <h1><Link to="/">Quiz!</Link></h1>
          </header>
          <div className="container">

            <Route exact path="/" component={ Posts }/>

            <Route path="/multiplier/:x/:y" render={ ({ match }) => (
              <Multiplier x={ match.params.x } y={ match.params.y } />
            )}/>

            <Route path="/even-clicks" component={ EvenClicks }/>

            <Route path="/count-by/:step" render={ ({ match }) => (
              <CountBy step={ match.params.step } />
            )}/>

            <Route path="/hide-me" render={ () => (
              <HideMe children="Blah blah blah"/>
            )}/>

            <Route path="/minimum/:length" render={ ({ match }) => (
              <MinimumLength length={ match.params.length } />
            )}/>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
