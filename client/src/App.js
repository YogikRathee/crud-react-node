import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import PrivateRoute from './routes'
import Actions from './actions'

import Home from './screens/Home'
import Dashboard from './screens/Dashboard'
import Footer from './components/Footer';
import RegisterContainer from './containers/RegisterContainer';
import LoginContainer from './containers/LoginContainer';
import HeaderContainer from './containers/HeaderContainer';
import history from './history';

const App = props => {
  console.log("Props: ", props)
  useEffect(()=>{
    if(localStorage.getItem('token') !== null){
      props.saveToken(localStorage.getItem('token'))
      props.history.push('/dash')
    }
  }, [])

  return (
    <Fragment>
      <HeaderContainer {...props} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
        style={{ minWidth: "400px" }}
      />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/register' component={RegisterContainer} />
        <PrivateRoute exact path='/dash' component={Dashboard} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

const mapStateToProps = state => ({
  Login: state.Login,
})

const mapActionToProps = dispatch => {
  return bindActionCreators({
    saveToken: Actions.loginSuccess
  }, dispatch)
}

export default connect(mapStateToProps, mapActionToProps)(App);
