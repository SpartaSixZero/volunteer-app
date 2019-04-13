import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

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
          <FormControl margin="normal">
            <InputLabel htmlFor="home-phone-field">Home Phone</InputLabel>
            <Input
              value={textmask}
              id="home-phone-field"
              inputComponent={TextMaskCustom}
            />
          </FormControl>
        </form>
      </div>
    )
  }
}

CreateAccount.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateAccount);