import React from 'react'
import { makeStyles, Paper, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: "20px",
        margin: "20px",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    buttonContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "40px"
    },
    link: {
        textDecoration: "none"
    }
}));

const HomePage = props => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
                Welcome to User CRUD Project
            </Typography>
            <Typography component="p">
                Please Login of Register to test the CRUD Functionality.
            </Typography>
            <div className={classes.buttonContainer}>
                <Button variant="contained" className={classes.button}>
                    <Link to="/login" className={classes.link} style={{ color: "#000" }}>Login</Link>
                </Button>
                <Button variant="contained" color="secondary" className={classes.button}>
                    <Link to="/register" className={classes.link} style={{ color: "#fff" }}>Register</Link>
                </Button>
            </div>
        </Paper>
    )
}

export default HomePage;