import React from 'react'

import './tasks.css'

export class Tasks extends React.Component {
  render() {
    return (
      <div>
        <h4>Название списка дел</h4>
        <div className="form-group" id="todo-tasks"></div>
        <div className="form-group" id="add-task">
          <div className="row form-group mx-auto" id="row-add">
            <input
              type="text"
              className="form-control"
              id="input-task"
              placeholder="Введите Дело"
            ></input>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input"></input>
              <label className="form-check-label">Срочное</label>
            </div>
            <button className="btn btn-outline-dark" id="add-btn">
              Добавить дело
            </button>
          </div>
        </div>
      </div>
    )
  }
}
