import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'

import LoginContainer from '../containers/login/loginContainer'
import RegisterContainer from '../containers/register/registerContainer'
import ApiContainer from '../containers/api/apiContainer'
import { setStatus } from '../actions/login/loginAction'

var firebase = require('firebase')

firebase.initializeApp({
  apiKey: 'AIzaSyA4YJIjhSpQV7a7-SssThNnAYc5lG6dUTM',
  authDomain: 'react-todo-d18dd.firebaseapp.com',
  databaseURL: 'https://react-todo-d18dd.firebaseio.com',
  projectId: 'react-todo-d18dd',
  storageBucket: 'react-todo-d18dd.appspot.com',
  messagingSenderId: '1049231229852',
  appId: '1:1049231229852:web:a90d3f66ca53815d887e59',
})

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem('isLogin') === 'true') {
      this.props.setStatus()
    }
  }

  render() {
    let { isLogin, regLogin } = this.props
    if (regLogin) {
      isLogin = regLogin
    }
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {isLogin ? <Redirect to="/main" /> : <LoginContainer />}
          </Route>
          <Route exact path="/register">
            {isLogin ? <Redirect to="/main" /> : <RegisterContainer />}
          </Route>
          <Route exact path="/main">
            {!isLogin ? (
              <Redirect to="/" />
            ) : (
              <ApiContainer isLogin={isLogin} />
            )}
          </Route>
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    isLogin: store.login.isLogin,
    regLogin: store.register.isLogin,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setStatus: () => dispatch(setStatus()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
