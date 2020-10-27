import React from 'react'
import { connect } from 'react-redux'
import { Register } from '../../components/register/register'

class RegisterContainer extends React.Component {
  render() {
    return <Register />
  }
}

const mapStateToProps = (store) => {
  return {
    registerReducer: store.registerReducer,
  }
}

export default connect(mapStateToProps)(RegisterContainer)
