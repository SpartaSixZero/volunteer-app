import React, { Component } from 'react';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import VolunteerApp from './components/VolunteerApp';

class App extends Component {
  render() {
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className="App">
          <VolunteerApp />
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}

export default App;
