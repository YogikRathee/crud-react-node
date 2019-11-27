import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Register = props => {
  const classes = useStyles();

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: ""
  });

  const onChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.register(
      state.firstName + ' ' + state.lastName,
      state.email,
      state.password,
      state.phone
    )
  };

  useEffect(()=>{
    if(props.Register.success) {
      console.log("Props: ", props)
      props.history.go(-1)
    }
  }, [props.Register.success])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                label="First Name"
                value={state.firstName}
                onChange={e => onChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                name="lastName"
                variant="outlined"
                required
                fullWidth
                label="Last Name"
                value={state.lastName}
                onChange={e => onChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                name="email"
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                value={state.email}
                onChange={e => onChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                name="password"
                variant="outlined"
                required
                fullWidth
                label="Password"
                value={state.password}
                onChange={e => onChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                name="phone"
                variant="outlined"
                required
                fullWidth
                label="Phone Number"
                value={state.phone}
                onChange={e => onChange(e)}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e=>handleSubmit(e)}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Register;
