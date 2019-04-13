import React, { Component } from 'react';
import Welcome from './Welcome';
import ApplicableOptions from './ApplicableOptions';
import IndividualFinder from './IndividualFinder';
import CreateAccount from './CreateAccount';
import MomentUtils from '@date-io/moment';

class VolunteerApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'welcome',
      numOfHours: '6',
      volunteerType: 'individual',
      checkInFirstName: '',
      checkInLastName: '',
      checkInDateOfBirth: new Date(),
      userFound: true,
      firstName: '',
      lastName: '',
      companySchoolOrganization: '',
      permanentAddress: '',
      homePhone: '',
      cellPhone: '',
      email: '',
      dateOfBirth: new Date(),
      physicalRestrictions: 'no',
      specialSkills: 'no',
      emergencyContact: '',
      emergencyContactPhone: '',
      relationshipWithEmergencyContact: '',
      agreeWithFoodBankTerms: '',
    }
    this.onCheckInClickHandler = this.onCheckInClickHandler.bind(this);
    this.numOfHoursOnChange = this.numOfHoursOnChange.bind(this);
    this.volunteerTypeOnChange = this.volunteerTypeOnChange.bind(this);
    this.applicableOptionsNextButtonClickHandler = this.applicableOptionsNextButtonClickHandler.bind(this);
    this.findUserButtonClickHandler = this.findUserButtonClickHandler.bind(this);
    this.createAccountButtonClickHandler = this.createAccountButtonClickHandler.bind(this);
    this.checkInFirstNameOnChange = this.checkInFirstNameOnChange.bind(this);
    this.checkInLastNameOnChange = this.checkInLastNameOnChange.bind(this);
    this.checkInDateOfBirthOnChange = this.checkInDateOfBirthOnChange.bind(this);
    this.firstNameOnChange = this.firstNameOnChange.bind(this);
    this.lastNameOnChange = this.lastNameOnChange.bind(this);
    this.companySchoolOrganizationOnChange = this.companySchoolOrganizationOnChange.bind(this);
    this.permanentAddressOnChange = this.permanentAddressOnChange.bind(this);
    this.homePhoneOnChange = this.homePhoneOnChange.bind(this);
    this.cellPhoneOnChange = this.cellPhoneOnChange.bind(this);
    this.emailOnChange = this.emailOnChange.bind(this);
    this.dateOfBirthOnChange = this.dateOfBirthOnChange.bind(this);
    this.physicalRestrictionsOnChange = this.physicalRestrictionsOnChange.bind(this);
    this.specialSkillsOnChange = this.specialSkillsOnChange.bind(this);
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

  checkInFirstNameOnChange(event) {
    this.setState({checkInFirstName: event.target.value});
  }

  checkInLastNameOnChange(event) {
    this.setState({checkInLastName: event.target.value});
  }

  checkInDateOfBirthOnChange(date) {
    const momentFunc = new MomentUtils();
    const dateString = momentFunc.format(date, "MM/DD/YYYY");
    this.setState({checkInDateOfBirth: dateString});
  }

  createAccountButtonClickHandler() {
    this.setState({currentView: 'createAccount'});
  }

  findUserButtonClickHandler() {
    this.setState({userFound: false});
  }

  firstNameOnChange(event) {
    this.setState({firstName: event.target.value});
  }

  lastNameOnChange(event) {
    this.setState({lastName: event.target.value});
  }

  companySchoolOrganizationOnChange(event) {
    this.setState({companySchoolOrganization: event.target.value});
  }

  permanentAddressOnChange(event) {
    this.setState({permanentAddressOnChange: event.target.value});
  }

  homePhoneOnChange(event) {
    this.setState({homePhone: event.target.value});
  }

  cellPhoneOnChange(event) {
    this.setState({cellPhone: event.target.value});
  }

  emailOnChange(event) {
    this.setState({email: event.target.value});
  }

  dateOfBirthOnChange(date) {
    const momentFunc = new MomentUtils();
    const dateString = momentFunc.format(date, "MM/DD/YYYY");
    this.setState({dateOfBirth: dateString});
  }

  physicalRestrictionsOnChange(event) {
    this.setState({physicalRestrictions: event.target.value});
  }

  specialSkillsOnChange(event) {
    this.setState({specialSkills: event.target.value});
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
            firstName={this.state.checkInFirstName}
            lastName={this.state.checkInLastName}
            dateOfBirth={this.state.checkInDateOfBirth}
            dateOfBirthOnChange={this.checkInDateOfBirthOnChange}
            checkInFirstNameOnChange={this.checkInFirstNameOnChange}
            checkInLastNameOnChange={this.checkInLastNameOnChange}
            findUserButtonClickHandler={this.findUserButtonClickHandler}
            userFound={this.state.userFound}
            createAccountButtonClickHandler={this.createAccountButtonClickHandler}
          />
        );
      case 'createAccount':
        return (
          <CreateAccount/>
        );
      default:
        return <Welcome onCheckInClickHandler={this.onCheckInClickHandler}/>
    }
  }
}

export default VolunteerApp;