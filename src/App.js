import React, { Component } from 'react';
import Welcome from './components/Welcome';
import ApplicableOptions from './components/ApplicableOptions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApplicableOptions />
      </div>
    );
  }
}

export default App;
