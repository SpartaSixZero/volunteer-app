import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  root: {
    width: '100%',
    maxWidth: 500,
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class ApplicableOptions extends Component {
  state = {
    value: 'individual',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
          <Typography variant="h4" gutterBottom>
            Select the applicable options
          </Typography>
          <FormControl component="fieldset" className={classes.formControl}>
            <TextField
              required
              id="standard-required"
              label="Number of Hours:"
              defaultValue="6"
              className={classes.textField}
              margin="normal"
            />
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Please pick volunteer type</FormLabel>
            <RadioGroup
              aria-label="Volunteer Type"
              name="volunteerType"
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <FormControlLabel value="individual" control={<Radio color="primary" />} label="Individual" />
              <FormControlLabel value="group" control={<Radio color="primary" />} label="Group" />
              <FormControlLabel value="courtOrdered" control={<Radio color="primary" />} label="Court Ordered" />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <Button variant="contained" color="primary" className={classes.button}>
            Next
          </Button>
        </div>
      </div>
    )
  }
}

ApplicableOptions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApplicableOptions);