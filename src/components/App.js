import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import LoginContainer from '../containers/login/loginContainer'
import RegisterContainer from '../containers/register/registerContainer'
import Main from '../containers/main/main'
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
      isLogin: '',
    }
  }
  static getDerivedStateFromProps(props, state) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log('вошел')
        return (state.isLogin = true)
      } else {
        // User is signed out.
        console.log('покинул кафе')
      }
    })
    return null
  }
  shouldComponentUpdate() {
    console.log('blyat')
  }
  componentDidUpdate() {
    console.log('update blyat')
  }

  render() {
    const { isLogin } = this.state
    console.log(isLogin)
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={LoginContainer} /> */}
          <Route exact path="/">
            {isLogin ? <Redirect to="/main" /> : <LoginContainer />}
          </Route>
          <Route path="/register" component={RegisterContainer} />
          <Route path="/main" component={Main} />
        </Switch>
      </Router>
    )
  }
}

export default App
