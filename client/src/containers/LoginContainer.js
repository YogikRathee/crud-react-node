import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from '../actions'
import Login from '../components/Login'

const LoginContainer = props => {
    return (
        <Login {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        Login: state.Login
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
          login : Actions.loginRequest
      },
      dispatch
    );
  };

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)