import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from "material-ui-pickers";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class IndividualFinder extends Component {
  renderCreateAccountSection(userFound, classes, createAccountButtonClickHandler) {
    if (!userFound) {
      return (
        <div style={{marginTop: 10, marginLeft: 10}}>
          <Typography variant="body" gutterBottom >
          We were unable to find you, please make sure your information is correct. Or click the button below to create NC Food Bank account.
          </Typography>
          <Button variant="contained" className={classes.button} onClick={createAccountButtonClickHandler}>
            Create Account
          </Button>
        </div>
      )
    } else {
      return null;
    }
  }

  render() {
    const {
      classes,
      dateOfBirthOnChange,
      firstName,
      lastName,
      dateOfBirth,
      findUserButtonClickHandler,
      userFound,
      createAccountButtonClickHandler,
    } = this.props;

    return (
      <div>
        <div>
          <Typography variant="h4" gutterBottom>
          Find yourself and check-in
          </Typography>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              required
              id="first-name"
              label="First Name"
              className={classes.textField}
              margin="normal"
              defaultValue={firstName}
            />
            <TextField
              required
              id="last-name"
              label="Last Name"
              className={classes.textField}
              margin="normal"
              defaultValue={lastName}
            />
            <DatePicker
              margin="normal"
              value={dateOfBirth}
              onChange={dateOfBirthOnChange}
              label="Date of Birth"
              disableFuture
              openTo="year"
              format="DD/MM/YYYY"
              views={["year", "month", "day"]}
            />
          </form>
        </div>
        <div style={{marginTop: 10}}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            style={{marginLeft: 10}}
            onClick={findUserButtonClickHandler}
          >
            Find
          </Button>
          <Button variant="contained" className={classes.button} style={{marginLeft: 10}}>
            Check-In
          </Button>
          <Button variant="contained" color="secondary" className={classes.button} style={{marginLeft: 10}}>
            Start Over
          </Button>
        </div>
        {this.renderCreateAccountSection(userFound, classes, createAccountButtonClickHandler)}
    </div>
    );
  }
}

IndividualFinder.propTypes = {
  classes: PropTypes.object.isRequired,
  dateOfBirthOnChange: PropTypes.func.isRequired,
  findUserButtonClickHandler: PropTypes.func.isRequired,
  createAccountButtonClickHandler: PropTypes.func.isRequired,
};

export default withStyles(styles)(IndividualFinder);