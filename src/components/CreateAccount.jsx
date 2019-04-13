import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { DatePicker } from "material-ui-pickers";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});

class CreateAccount extends Component {
  state = {
    textmask: '(  )    -    ',
  }
  render() {
    const { classes } = this.props;
    const { textmask } = this.state;

    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Create an Account
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="first-name-field"
            label="First Name"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            required
            id="last-name-field"
            label="Last Name"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="company-school-organization"
            label="Company/School/Organization"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="address-field"
            label="Permanent Address"
            className={classes.textField}
            margin="normal"
          />
          <FormControl margin="normal" style={{marginRight: 10}}>
            <InputLabel htmlFor="home-phone-field">Home Phone</InputLabel>
            <Input
              value={textmask}
              id="home-phone-field"
              inputComponent={TextMaskCustom}
            />
          </FormControl>
          <FormControl margin="normal">
            <InputLabel htmlFor="cell-phone-field">Cell Phone</InputLabel>
            <Input
              value={textmask}
              id="cell-phone-field"
              inputComponent={TextMaskCustom}
            />
          </FormControl>
          <TextField
            id="email-field"
            label="Email"
            className={classes.textField}
            margin="normal"
          />
          <DatePicker
            margin="normal"
            value={new Date()}
            label="Date of Birth"
            disableFuture
            openTo="year"
            format="DD/MM/YYYY"
            views={["year", "month", "day"]}
          />
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Do you have any physical restrictions or special needs</FormLabel>
            <RadioGroup
              aria-label="physical restrictions"
              name="physicalRestrictions"
              className={classes.group}
              value="no"
            >
              <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
              <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Do you have any special skills or areas of interest?</FormLabel>
            <RadioGroup
              aria-label="special skills"
              name="specialSkills"
              className={classes.group}
              value="no"
            >
              <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
              <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
            </RadioGroup>
          </FormControl>
          <TextField
            id="emergency-contact-field"
            label="Emergency Contact"
            className={classes.textField}
            margin="normal"
            required
          />
          <FormControl margin="normal">
            <InputLabel htmlFor="emergency-contact-phone-field">Emergency Contact Phone #</InputLabel>
            <Input
              value={textmask}
              id="emergency-contact-phone-field"
              inputComponent={TextMaskCustom}
            />
          </FormControl>
          <TextField
            id="relationship-with-emergency-contact-field"
            label="Relationship with Emergency Contact"
            className={classes.textField}
            margin="normal"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={false}
                value="checkedB"
                color="primary"
              />
            }
            label="I agree with NC Food Bank terms"
          />
          <Button variant="contained" color="secondary" className={classes.button} style={{marginLeft: 10}}>
            NC Food Bank Terms
          </Button>
        </form>
      </div>
    )
  }
}

CreateAccount.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateAccount);