import React from 'react'
import { connect } from 'react-redux'
import { Login } from '../../components/login/login'
import { handleLogin } from '../../actions/login/loginAction'

class LoginContainer extends React.Component {
  render() {
    const { login, handleLogin } = this.props
    return (
      <Login
        error={login.error}
        isFetching={login.isFetching}
        isLogin={login.isLogin}
        handleLogin={handleLogin}
      />
    )
  }
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: () => dispatch(handleLogin()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
