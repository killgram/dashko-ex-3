import React from 'react'
import { connect } from 'react-redux'
import { Register } from '../../components/register/register'
import { createUser } from '../../actions/register/registerAction'

class RegisterContainer extends React.Component {
  render() {
    const { createUser, register } = this.props
    return <Register error={register.error} createUser={createUser} />
  }
}

const mapStateToProps = (store) => {
  return {
    register: store.register,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (email, password) => dispatch(createUser(email, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
