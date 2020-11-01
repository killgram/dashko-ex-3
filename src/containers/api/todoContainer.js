import React from 'react'
import { connect } from 'react-redux'

import { Case } from '../../components/api/case'
import { Tasks } from '../../components/api/tasks'

import './todoContainer.css'

class TodoContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="row">
            <div className="form-group" id="case">
              <Case />
            </div>
            <div className="form-group" id="tasks">
              <Tasks />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default TodoContainer
