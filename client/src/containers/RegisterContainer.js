import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from '../actions'
import Register from '../components/Register'

const RegisterContainer = props => {
    return (
        <Register {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        Register: state.Register
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
          register : Actions.registerRequest
      },
      dispatch
    );
  };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)