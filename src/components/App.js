import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LoginContainer from '../containers/login/loginContainer'
import RegisterContainer from '../containers/register/registerContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />
        </Switch>
      </Router>
    )
  }
}

export default App
