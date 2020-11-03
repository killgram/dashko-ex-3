import React from 'react'
import { connect } from 'react-redux'

import { Case } from '../../components/api/case'
import { Tasks } from '../../components/api/tasks'

import { addCase, checkCase } from '../../actions/api/addCaseAction'
import { selectCase, addTask } from '../../actions/api/chooseCase'

import './todoContainer.css'

class TodoContainer extends React.Component {
  render() {
    const {
      addCase,
      checkCase,
      uid,
      selectCase,
      taskdata,
      addTask,
    } = this.props
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
                selectCase={selectCase}
              />
            </div>
            <div className="form-group" id="tasks">
              <Tasks
                uid={localStorage.getItem('uid')}
                data={taskdata.taskData}
                case_id={taskdata.case_id}
                case_value={taskdata.case_value}
                addTask={addTask}
              />
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
    taskdata: store.choosecase,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCase: (setCase, letUid) => dispatch(addCase(setCase, letUid)),
    checkCase: (items) => dispatch(checkCase(items)),
    selectCase: (case_id) => dispatch(selectCase(case_id)),
    addTask: (data) => dispatch(addTask(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
