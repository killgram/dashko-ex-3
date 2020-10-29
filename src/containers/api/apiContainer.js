import React from 'react'
import { connect } from 'react-redux'
import NavContainer from './NavContainer'
import TodoContainer from './todoContainer'
import { handleLogout } from '../../actions/api/logoutAction'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

class ApiContainer extends React.Component {
  render() {
    let { isLogin } = this.props
    console.log(this.props)
    return (
      <Router>
        <Switch>
          <Route exact path="/main">
            <NavContainer />
            <TodoContainer />
          </Route>
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    isLogin: store.login.isLogin,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout: () => dispatch(handleLogout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiContainer)
