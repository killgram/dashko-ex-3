import React from 'react'
import { connect } from 'react-redux'

import { NavMenu } from '../../components/api/NavMenu'
import { handleLogout } from '../../actions/api/logoutAction'

class NavContainer extends React.Component {
  render() {
    const { handleLogout } = this.props

    return <NavMenu handleLogout={handleLogout} />
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

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer)
