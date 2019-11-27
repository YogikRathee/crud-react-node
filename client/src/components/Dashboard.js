import React, { useEffect, useState, Fragment } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { EditSharp, DeleteSharp } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import DeletePopup from './DeletePopup';
import EditPopup from './EditPopup';
import CreatePopup from './CreatePopup';
import { flexbox } from '@material-ui/system';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        maxWidth: 200,
        wordBreak: 'break-all'
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        margin: "24px 24px 0",
        justifyContent: "flex-end"
    },
    button: {

    },
    root: {
        margin: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    icon: {
        width: "1.5em",
        height: "1.5em",
        margin: "auto 10px",
        cursor: "pointer"
    }
}));

const Dashboard = props => {
    const classes = useStyles();
    const [id, setID] = useState(null)
    const [del, openDelete] = useState(false)
    const [edit, openEdit] = useState(false)
    const [create, openCreate] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        props.getUsers()
    }, [])

    const handleEdit = (event, data) => {
        event.preventDefault()
        setData(data)
        openEdit(true)
    }

    const handleDelete = (event, data) => {
        event.preventDefault()
        setID(data)
        openDelete(true)
    }

    const handleCreate = event => {
        event.preventDefault()
        openCreate(true)
    }

    return (
        <Fragment>
            <div className={classes.container}>
                <Button variant="contained" color="secondary" onClick={e => handleCreate(e)}>Create New User</Button>
            </div>
            <Paper className={classes.root}>
                {
                    del
                        ? <DeletePopup
                            open={del}
                            close={openDelete}
                            delete={props.deleteUser}
                            id={id}
                        />
                        : null
                }
                {
                    edit
                        ? <EditPopup
                            open={edit}
                            close={openEdit}
                            edit={props.updateUser}
                            data={data}
                        />
                        : null
                }
                {
                    create
                        ? <CreatePopup
                            open={create}
                            close={openCreate}
                            create={props.createUser}
                        />
                        : null
                }
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Name</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">Phone</StyledTableCell>
                            <StyledTableCell align="center">Password</StyledTableCell>
                            <StyledTableCell align="center">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.Users.users.map(row => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                                <StyledTableCell align="left">{row.email}</StyledTableCell>
                                <StyledTableCell align="left">{row.phone}</StyledTableCell>
                                <StyledTableCell align="left">{row.password}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <EditSharp className={classes.icon} onClick={e => handleEdit(e, row)} />
                                    <DeleteSharp className={classes.icon} onClick={e => handleDelete(e, row._id)} />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Fragment>
    )
}

export default Dashboard;