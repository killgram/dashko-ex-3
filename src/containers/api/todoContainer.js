import React from 'react'
import { connect } from 'react-redux'

import { Case } from '../../components/api/case'
import { Tasks } from '../../components/api/tasks'

import { addCase, checkCase } from '../../actions/api/addCaseAction'
import {
  selectCase,
  addTask,
  deleteTask,
  deleteCase,
} from '../../actions/api/chooseCase'
import { changeStatusTask } from '../../actions/api/taskDoneAction'

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
      deleteTask,
      deleteCase,
      isOpen,
      changeStatusTask,
      task_status,
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
                deleteCase={deleteCase}
              />
            </div>
            <div className="form-group" id="tasks">
              <Tasks
                uid={localStorage.getItem('uid')}
                data={taskdata.taskData}
                case_id={taskdata.case_id}
                case_value={taskdata.case_value}
                addTask={addTask}
                deleteTask={deleteTask}
                isOpen={isOpen}
                changeStatusTask={changeStatusTask}
                task_status={task_status}
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
    isOpen: store.choosecase.isOpen,
    task_status: store.taskstatus.task_status_l,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCase: (setCase, letUid) => dispatch(addCase(setCase, letUid)),
    checkCase: (items) => dispatch(checkCase(items)),
    selectCase: (case_id) => dispatch(selectCase(case_id)),
    addTask: (data) => dispatch(addTask(data)),
    deleteTask: (task) => dispatch(deleteTask(task)),
    deleteCase: (case_data) => dispatch(deleteCase(case_data)),
    changeStatusTask: (id, status) => dispatch(changeStatusTask(id, status)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
