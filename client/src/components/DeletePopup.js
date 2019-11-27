import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
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
    },
}));

const DeletePopup = props => {
    const classes = useStyles();
    const [open, setOpen] = useState(props.open);

    const handleClose = () => {
        setOpen(false);
        props.close(false)
    };

    const handleDelete = () => {
        handleClose()
        props.delete(props.id)
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
                        <h2 id="transition-modal-title">Confirm Delete Operation</h2>
                        <h4>{props.id}</h4>
                        <div style={{ display: "flex", justifyContent: "space-evenly"}}>
                        <Button variant="contained" color="primary" onClick={e=>handleDelete(e)}>Confirm</Button>
                        <Button variant="contained" color="secondary" onClick={e=>handleClose(e)}>Cancel</Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default DeletePopup