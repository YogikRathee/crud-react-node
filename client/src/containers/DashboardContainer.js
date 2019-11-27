import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from '../actions'
import Dashboard from '../components/Dashboard'

const DashboardContainer = props => {
    return (
        <Dashboard {...props} />
    )
}

const mapStateToProps = (state) => {
    return {
        Users: state.Users,
        Login: state.Login
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getUsers: Actions.getUser,
            createUser: Actions.registerRequest,
            deleteUser: Actions.deleteUser,
            updateUser: Actions.updateUser
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)