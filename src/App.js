import React, { Component } from 'react';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import Welcome from './components/Welcome';
import ApplicableOptions from './components/ApplicableOptions';
import IndividualFinder from './components/IndividualFinder';

class App extends Component {
  render() {
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className="App">
          <IndividualFinder />
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}

export default App;
