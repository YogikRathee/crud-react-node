import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '10px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: 600
    },
}));

const CreatePopup = props => {
    const classes = useStyles();
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: ''
    });

    const onChange = event => {
        setState({ ...state, [event.target.name]: event.target.value });
    };

    const handleClose = () => {
        props.close(false)
    };

    const createUser = () => {
        handleClose()
        props.create(
            state.firstName + ' ' + state.lastName,
            state.email,
            state.password,
            state.phone
        )
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Create New User</h2>
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
                        </form>
                        <div style={{ display: "flex", justifyContent: "space-evenly", width: 400, marginTop: 20 }}>
                            <Button variant="contained" color="primary" onClick={e => createUser(e)}>Create</Button>
                            <Button variant="contained" color="secondary" onClick={e => handleClose(e)}>Cancel</Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default CreatePopup