import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import LoginContainer from '../containers/login/loginContainer'
import RegisterContainer from '../containers/register/registerContainer'
import ApiContainer from '../containers/api/apiContainer'
import { store } from '../store/configureStore'

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
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false,
    }
  }

  componentDidMount() {
    if (localStorage.getItem('isLogin') === 'true') {
      this.setState({
        isLogin: localStorage.getItem('isLogin'),
      })
    }
    if (localStorage.getItem('isLogin') === 'false') {
      console.log('не авторизован')
    }
  }

  render() {
    const { isLogin } = this.state
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {isLogin ? <Redirect to="/main" /> : <LoginContainer />}
          </Route>
          <Route path="/register" component={RegisterContainer} />
          <Route path="/main" component={ApiContainer} />
        </Switch>
      </Router>
    )
  }
}

export default App
