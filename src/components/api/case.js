import React from 'react'

import './case.css'

export class Case extends React.Component {
  render() {
    return (
      <div>
        <div className="form-group" id="sortList">
          <select className="form-control" id="selectSort">
            <option>Все</option>
            <option>Пустые</option>
            <option>Завершенные</option>
            <option>Не завершенные</option>
          </select>
        </div>
        <div className="form-group" id="todo-case"></div>
        <div className="form-group" id="add-todo">
          <input
            type="text"
            className="form-control"
            placeholder="Введите название списка"
            id="input-field"
          ></input>
        </div>
        <button className="btn btn-outline-dark" id="add-case">
          Добавить список
        </button>
      </div>
    )
  }
}
