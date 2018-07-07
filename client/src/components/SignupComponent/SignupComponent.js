import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  margin: {
    margin: theme.spacing.unit
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Sign up for an Account!
        </Typography>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                label="First Name (required)"
                className={classes.textField}
                margin="normal"
                fullWidth
                onChange={props.firstNameAction}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                label="Last Name (required)"
                className={classes.textField}
                margin="normal"
                fullWidth
                onChange={props.lastNameAction}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="username"
                label="Username (required)"
                className={classes.textField}
                margin="normal"
                fullWidth
                onChange={props.usernameAction}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                  id="weight"
                  label="Weight (optional)"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  onChange={props.weightAction}
                >
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="password"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                fullWidth
                onChange={props.passwordAction}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="passwordConfirmation"
                label="Confirm Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                fullWidth
                onChange={props.passwordConfirmAction}
              />
            </Grid>
          </Grid>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);

{
  /* 
<FormControl className={classes.margin}>
    <InputLabel htmlFor="input-with-icon-adornment">
        First Name (required)
            </InputLabel>
    <Input
        id="input-with-icon-adornment"
        startAdornment={
            <InputAdornment position="start">
                <AccountCircle />
            </InputAdornment>
        }
    />
</FormControl>
    <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">
            Last Name (required)
            </InputLabel>
        <Input
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                    <AccountCircle />
                </InputAdornment>
            }
        />
    </FormControl>
    <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">
            Username (required)
            </InputLabel>
        <Input
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                    <AccountCircle />
                </InputAdornment>
            }
        />
    </FormControl>
    <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">
            Password (required)
            </InputLabel>
        <Input
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                    <AccountCircle />
                </InputAdornment>
            }
        />
    </FormControl>
    <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">
            Weight (optional)
            </InputLabel>
        <Input
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                    <AccountCircle />
                </InputAdornment>
            }
        />
    </FormControl> */
}
