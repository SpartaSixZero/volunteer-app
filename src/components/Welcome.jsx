import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
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
});

function Welcome(props) {
  const { classes, onCheckInClickHandler } = props
  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Welcome to NC Food Bank
      </Typography>
      <Button variant="contained" color="primary" className={classes.button} onClick={onCheckInClickHandler}>
        Check-In
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Check-Out
      </Button>
    </div>
  );
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
  onCheckInClickHandler: PropTypes.func.isRequired,
};

export default withStyles(styles)(Welcome);