import React, { useEffect } from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    button: {
        marginLeft: "20px",
    }
}));

const Header = props => {
    const classes = useStyles();

    const handleLogout = event => {
        event.preventDefault()
        props.logout(props.history)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense" className={classes.toolbar}>
                    <Typography variant="h6" color="inherit">
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Link>
                    </Typography>
                    <div className={classes.menu}>
                        {
                            localStorage.getItem('token') 
                                ?   <Button variant="contained" className={classes.button, classes.link} onClick={e=>handleLogout(e)}>
                                        Logout
                                    </Button>
                                : null
                        }
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header