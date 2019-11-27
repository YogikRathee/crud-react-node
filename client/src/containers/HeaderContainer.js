import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from '../actions'
import Header from '../components/Header'

const HeaderContainer = props => {
    return (
        <Header {...props} />
    )
}

const mapStateToProps = (state) => {
    return {
        Login: state.Login,
        Users: state.Users
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            logout: Actions.logout
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)