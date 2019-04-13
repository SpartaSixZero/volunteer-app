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

  state = {
    date: new Date(),
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes, dateOfBirthOnChange, firstName, lastName, dateOfBirth } = this.props;

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
          <Button variant="contained" color="primary" className={classes.button} style={{marginLeft: 10}}>
            Find
          </Button>
          <Button variant="contained" className={classes.button} style={{marginLeft: 10}}>
            Check-In
          </Button>
          <Button variant="contained" color="secondary" className={classes.button} style={{marginLeft: 10}}>
            Start Over
          </Button>
        </div>
    </div>
    );
  }
}

IndividualFinder.propTypes = {
  classes: PropTypes.object.isRequired,
  dateOfBirthOnChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(IndividualFinder);