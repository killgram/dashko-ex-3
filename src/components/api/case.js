import React from 'react'
import { connect } from 'react-redux'
import { checkCase } from '../../actions/api/addCaseAction'

import './case.css'

export class Case extends React.Component {
  state = {
    uid: this.props.uid,
  }
  inputCase = (e) => {
    this.setState({
      case: e.currentTarget.value,
    })
  }
  addClick = (e) => {
    e.preventDefault()
    this.props.addCase(this.state.case, this.props.uid)
  }

  setCaseBtn = (data) => {
    return data.map((item) => {
      return <button key={item.case_id}>{item.case_value}</button>
    })
  }

  render() {
    let { data } = this.props
    this.props.checkCase(data)

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
        <div className="form-group" id="todo-case">
          {this.setCaseBtn(data)}
        </div>
        <div className="form-group" id="add-todo">
          <input
            type="text"
            className="form-control"
            placeholder="Введите название списка"
            id="input-field"
            onChange={this.inputCase}
          ></input>
        </div>
        <button
          className="btn btn-outline-dark"
          id="add-case"
          onClick={this.addClick}
        >
          Добавить список
        </button>
      </div>
    )
  }
}
