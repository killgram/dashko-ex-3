import React from 'react'
import { connect } from 'react-redux'

import { Case } from '../../components/api/case'
import { Tasks } from '../../components/api/tasks'

import { addCase } from '../../actions/api/addCaseAction'

import './todoContainer.css'

const firebase = require('firebase')

class TodoContainer extends React.Component {
  render() {
    const { addCase } = this.props
    return (
      <div className="container">
        <form>
          <div className="row">
            <div className="form-group" id="case">
              <Case addCase={addCase} uid={localStorage.getItem('uid')} />
            </div>
            <div className="form-group" id="tasks">
              <Tasks uid={localStorage.getItem('uid')} />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  console.log(store)
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCase: (setCase, letUid) => dispatch(addCase(setCase, letUid)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
