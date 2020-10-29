import React from 'react'
import { connect } from 'react-redux'

import { TodoMain } from '../../components/api/TodoMain'

class TodoContainer extends React.Component {
  render() {
    return <TodoMain />
  }
}

const mapStateToProps = (store) => {
  return {
    isLogin: store.login,
  }
}

export default connect(mapStateToProps)(TodoContainer)
