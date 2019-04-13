import React, { Component } from 'react';
import Welcome from './Welcome';
import ApplicableOptions from './ApplicableOptions';
import IndividualFinder from './IndividualFinder';
import MomentUtils from '@date-io/moment';

class VolunteerApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'welcome',
      numOfHours: '6',
      volunteerType: 'individual',
      firstName: '',
      lastName: '',
      dateOfBirth: new Date(),
    }
    this.onCheckInClickHandler = this.onCheckInClickHandler.bind(this);
    this.numOfHoursOnChange = this.numOfHoursOnChange.bind(this);
    this.volunteerTypeOnChange = this.volunteerTypeOnChange.bind(this);
    this.applicableOptionsNextButtonClickHandler = this.applicableOptionsNextButtonClickHandler.bind(this);
    this.dateOfBirthOnChange = this.dateOfBirthOnChange.bind(this);
  }

  onCheckInClickHandler() {
    this.setState({currentView: 'applicableOptions'});
  }

  numOfHoursOnChange(event) {
    this.setState({numOfHours: event.target.value});
  }

  volunteerTypeOnChange(event) {
    this.setState({volunteerType: event.target.value});
  }

  applicableOptionsNextButtonClickHandler() {
    this.setState({currentView: 'individualFinder'});
  }

  dateOfBirthOnChange(date) {
    console.log('date is ', date);
    const momentFunc = new MomentUtils();
    const dateString = momentFunc.format(date, "MM/DD/YYYY");

    console.log('dateString is', dateString)

    this.setState({dateOfBirth: dateString});
  }

  render() {
    switch (this.state.currentView) {
      case 'welcome':
        return <Welcome onCheckInClickHandler={this.onCheckInClickHandler}/>
      case 'applicableOptions':
        return (
          <ApplicableOptions
            numOfHours={this.state.numOfHours}
            volunteerType={this.state.volunteerType}
            numOfHoursOnChange={this.numOfHoursOnChange}
            volunteerTypeOnChange={this.volunteerTypeOnChange}
            applicableOptionsNextButtonClickHandler={this.applicableOptionsNextButtonClickHandler}
          />
        );
      case 'individualFinder':
        return (
          <IndividualFinder
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            dateOfBirth={this.state.dateOfBirth}
            dateOfBirthOnChange={this.dateOfBirthOnChange}
          />
        )
      default:
        return <Welcome onCheckInClickHandler={this.onCheckInClickHandler}/>
    }
  }
}

export default VolunteerApp;