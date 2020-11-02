import React from 'react'
import { connect } from 'react-redux'

import { Case } from '../../components/api/case'
import { Tasks } from '../../components/api/tasks'

import { addCase, checkCase } from '../../actions/api/addCaseAction'

import './todoContainer.css'

import { db } from '../../components/App'
var firebase = require('firebase')

class TodoContainer extends React.Component {
  render() {
    const { addCase, checkCase, uid } = this.props
    return (
      <div className="container">
        <form>
          <div className="row">
            <div className="form-group" id="case">
              <Case
                addCase={addCase}
                uid={uid}
                data={this.props.data}
                checkCase={checkCase}
              />
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
  return {
    data: store.addcase.caseData,
    uid: localStorage.getItem('uid'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCase: (setCase, letUid) => dispatch(addCase(setCase, letUid)),
    checkCase: (items) => dispatch(checkCase(items)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
