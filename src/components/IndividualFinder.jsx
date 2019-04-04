import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from "material-ui-pickers";
import MomentUtils from '@date-io/moment';

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

  handleDateChange = date => {
    console.log('date is ', date);
    const momentFunc = new MomentUtils();
    const dateString = momentFunc.format(date, "MM/dd/yyyy");

    this.setState('date', dateString);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
      <div>
        <Typography variant="h4" gutterBottom>
        Select the applicable options
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="first-name"
            label="First Name"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            required
            id="last-name"
            label="Last Name"
            className={classes.textField}
            margin="normal"
          />
          <DatePicker
            margin="normal"
            value={this.state.date}
            onChange={this.handleDateChange}
            label="Date of Birth"
            disableFuture
            openTo="year"
            format="DD/MM/YYYY"
            views={["year", "month", "day"]}
          />
        </form>
      </div>
      <div>
        <Button variant="contained" color="primary" className={classes.button}>
          Find
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          Check-In
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          Start Over
        </Button>
      </div>
    </div>
    );
  }
}

IndividualFinder.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndividualFinder);