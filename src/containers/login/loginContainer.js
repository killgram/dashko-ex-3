import React from 'react'
import { connect } from 'react-redux'
import { Login } from '../../components/login/login'
import { handleLogin } from '../../actions/login/loginAction'

class LoginContainer extends React.Component {
  render() {
    const { loginReducer, handleLogin } = this.props
    return (
      <Login
        error={loginReducer.error}
        isFetching={loginReducer.isFetching}
        isLogin={loginReducer.isLogin}
        handleLogin={handleLogin}
      />
    )
  }
}

const mapStateToProps = (store) => {
  return {
    loginReducer: store.loginReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: () => dispatch(handleLogin()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
