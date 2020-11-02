import React from 'react'
import { connect } from 'react-redux'
import NavContainer from './NavContainer'
import TodoContainer from './todoContainer'
import { handleLogout } from '../../actions/api/logoutAction'
import { Route } from 'react-router-dom'

class ApiContainer extends React.Component {
  render() {
    return (
      <Route exact path="/main">
        <NavContainer username={localStorage.getItem('user')} />
        <TodoContainer uid={this.props.uid} />
      </Route>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    isLogin: store.login.isLogin,
    uid: localStorage.getItem('uid'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout: () => dispatch(handleLogout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiContainer)
