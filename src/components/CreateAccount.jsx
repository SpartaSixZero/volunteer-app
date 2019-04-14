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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
    open: false,
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  agreeButtonClicked = () => {
    this.props.agreementDialogOnAgreeButtonClick();
    this.handleClose();
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      classes,
      dateOfBirth,
      homePhone,
      cellPhone,
      emergencyContactPhone,
      physicalRestrictions,
      specialSkills,
      agreeWithFoodBankTerms,
      firstNameOnChange,
      lastNameOnChange,
      companySchoolOrganizationOnChange,
      permanentAddressOnChange,
      homePhoneOnChange,
      cellPhoneOnChange,
      emailOnChange,
      dateOfBirthOnChange,
      physicalRestrictionsOnChange,
      specialSkillsOnChange,
      emergencyContactOnChange,
      emergencyContactPhoneOnChange,
      relationshipWithEmergencyContactOnChange,
      agreeWithFoodBankTermsOnChange,
      agreementDialogOnAgreeButtonClick,
    } = this.props;
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
            onChange={firstNameOnChange}
          />
          <TextField
            required
            id="last-name-field"
            label="Last Name"
            className={classes.textField}
            margin="normal"
            onChange={lastNameOnChange}
          />
          <TextField
            id="company-school-organization"
            label="Company/School/Organization"
            className={classes.textField}
            margin="normal"
            onChange={companySchoolOrganizationOnChange}
          />
          <TextField
            id="address-field"
            label="Permanent Address"
            className={classes.textField}
            margin="normal"
            onChange={permanentAddressOnChange}
          />
          <FormControl margin="normal" style={{marginRight: 10}}>
            <InputLabel htmlFor="home-phone-field">Home Phone</InputLabel>
            <Input
              value={homePhone}
              id="home-phone-field"
              inputComponent={TextMaskCustom}
              onChange={homePhoneOnChange}
            />
          </FormControl>
          <FormControl margin="normal">
            <InputLabel htmlFor="cell-phone-field">Cell Phone</InputLabel>
            <Input
              value={cellPhone}
              id="cell-phone-field"
              inputComponent={TextMaskCustom}
              onChange={cellPhoneOnChange}
            />
          </FormControl>
          <TextField
            id="email-field"
            label="Email"
            className={classes.textField}
            margin="normal"
            onChange={emailOnChange}
          />
          <DatePicker
            margin="normal"
            value={dateOfBirth}
            label="Date of Birth"
            disableFuture
            openTo="year"
            format="DD/MM/YYYY"
            views={["year", "month", "day"]}
            onChange={dateOfBirthOnChange}
          />
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Do you have any physical restrictions or special needs</FormLabel>
            <RadioGroup
              aria-label="physical restrictions"
              name="physicalRestrictions"
              className={classes.group}
              value={physicalRestrictions}
              onChange={physicalRestrictionsOnChange}
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
              value={specialSkills}
              onChange={specialSkillsOnChange}
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
            onChange={emergencyContactOnChange}
          />
          <FormControl margin="normal">
            <InputLabel htmlFor="emergency-contact-phone-field">Emergency Contact Phone #</InputLabel>
            <Input
              value={emergencyContactPhone}
              id="emergency-contact-phone-field"
              inputComponent={TextMaskCustom}
              onChange={emergencyContactPhoneOnChange}
            />
          </FormControl>
          <TextField
            id="relationship-with-emergency-contact-field"
            label="Relationship with Emergency Contact"
            className={classes.textField}
            margin="normal"
            onChange={relationshipWithEmergencyContactOnChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={agreeWithFoodBankTerms}
                value="checkedB"
                color="primary"
                onChange={agreeWithFoodBankTermsOnChange}
              />
            }
            label="I agree with NC Food Bank terms"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClickOpen}
            className={classes.button}
            style={{marginLeft: 10}}
          >
            NC Food Bank Terms
          </Button>
          <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Consent Form"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            <p>I understand that volunteerism at the Food Bank of Central & Eastern North Carolina may sometimes mean working in warehouse conditions and can sometimes include but is not limited to lifting, working around heavy moving equipment and handling damaged food products. I hereby accept and assume full responsibility for any injury I might suffer while volunteering at the Food Bank of Central & Eastern North of Carolina. Volunteers are expected to follow safety rules and all other rules related to the warehouse. In the event of injury parents/guardians authorizes Food bank staff to seek treatment for minor volunteers (volunteers under 18 years of age) and to take other action should a medical emergency arise and waive and release my right for damages.</p>
            <p><strong>Parental Permission:</strong> The Food Bank of Central & Eastern North Carolina will take all precautions to provide and maintain a safe environment for its volunteers. Volunteers are expected to follow safety rules and all other rules related to the warehouse. The Food Banks accepts no liability for minor volunteers who leave the Food Bank property without parental or guardian consent.</p>
            <p><strong>Photo release:</strong> I hereby give the Food Bank of Central & Eastern North Carolina permission to copyright and/or use, reuse and/or publish and/or republish pictures or images of me for the purpose of illustration, advertising, and promoting the Food Bank of Central & Eastern North Carolina thorugh any medium. The Food Bank of Central & Eastern North Carolina has the right to change or alter this material</p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.agreeButtonClicked} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
        </form>
      </div>
    )
  }
}

CreateAccount.propTypes = {
  classes: PropTypes.object.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  homePhone: PropTypes.string.isRequired,
  cellPhone: PropTypes.string.isRequired,
  emergencyContactPhone: PropTypes.string.isRequired,
  physicalRestrictions: PropTypes.string.isRequired,
  specialSkills: PropTypes.string.isRequired,
  agreeWithFoodBankTerms: PropTypes.bool.isRequired,
  firstNameOnChange: PropTypes.func.isRequired,
  lastNameOnChange: PropTypes.func.isRequired,
  companySchoolOrganizationOnChange: PropTypes.func.isRequired,
  permanentAddressOnChange: PropTypes.func.isRequired,
  homePhoneOnChange: PropTypes.func.isRequired,
  cellPhoneOnChange: PropTypes.func.isRequired,
  emailOnChange: PropTypes.func.isRequired,
  dateOfBirthOnChange: PropTypes.func.isRequired,
  physicalRestrictionsOnChange: PropTypes.func.isRequired,
  specialSkillsOnChange: PropTypes.func.isRequired,
  emergencyContactOnChange: PropTypes.func.isRequired,
  emergencyContactPhoneOnChange: PropTypes.func.isRequired,
  relationshipWithEmergencyContactOnChange: PropTypes.func.isRequired,
  agreeWithFoodBankTermsOnChange: PropTypes.func.isRequired,
  agreementDialogOnAgreeButtonClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(CreateAccount);