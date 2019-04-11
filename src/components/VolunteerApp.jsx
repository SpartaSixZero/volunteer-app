import React, { Component } from 'react';
import Welcome from './Welcome';
import ApplicableOptions from './ApplicableOptions';

class VolunteerApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'welcome',
      numOfHours: 6,
      volunteerType: 'individual'
    }
    this.onCheckInClickHandler = this.onCheckInClickHandler.bind(this);
  }

  onCheckInClickHandler() {
    this.setState({currentView: 'applicableOptions'});
  }

  render() {
    switch (this.state.currentView) {
      case 'welcome':
        return <Welcome onCheckInClickHandler={this.onCheckInClickHandler}/>
      case 'applicableOptions':
        return <ApplicableOptions/>
      default:
        return <Welcome onCheckInClickHandler={this.onCheckInClickHandler}/>
    }
  }
}

export default VolunteerApp;