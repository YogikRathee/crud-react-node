import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer: {
        width: "99%",
        backgroundColor: '#d5bff5',
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        padding: "0.5%"
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © Yogesh Kumar ' + new Date().getFullYear()}
            </Typography>
        </footer>
    );
}

export default Footer