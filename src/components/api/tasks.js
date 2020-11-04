import { check } from 'prettier'
import React from 'react'
import { AddModal } from './addmodal'
import { DeleteTaskModal } from './deleteTaskModal'

import './tasks.css'

export class Tasks extends React.Component {
  state = {
    disabledBtn: true,
    task_value: '',
    ckeck_quickly: false,
    name: '',
    task_id: '',
  }

  deleteBtn = (task_value, task_id, e) => {
    e.preventDefault()
    this.setState({
      name: task_value,
      task_id: task_id,
    })
  }

  noTaskTarget = () => {
    return (
      <img
        src="https://image.freepik.com/free-photo/smiling-cheerful-redhead-girl-showing-advertisement-pointing-left_176420-19299.jpg"
        alt="choose_case"
        className="img-fluid"
      ></img>
    )
  }

  createTask = (data) => {
    return data.map((item) => {
      let task_timestamp = item.create_time
      let st
      let date = new Date(task_timestamp).toLocaleDateString('en-GB')
      let time = new Date(task_timestamp).toLocaleTimeString('en-GB')
      switch (item.task_quickly) {
        case false:
          st = 'ne_ochen_srocnoe_delo'
          break
        case true:
          st = 'krasniy_krug'
          break
        default:
          return
      }
      return (
        <div key={item.task_id} className="row" id="tasks-id">
          <div>
            <input type="checkbox" id="checkbox_task"></input>
          </div>
          <div id="task_main_part" className="row align-items-center">
            <div className={st}></div>
            <label id="task_value">{item.task_value}</label>
            <label id="task_time" className="ml-auto">
              {date} {time}
            </label>
            <button
              className="btn btn-primary-light case-delete-btn justify-content-end"
              data-toggle="modal"
              data-target="#delete_task"
              onClick={(e) => this.deleteBtn(item.task_value, item.task_id, e)}
            >
              X
            </button>
          </div>
        </div>
      )
    })
  }

  addTask = (e) => {
    e.preventDefault()
    let time = Date.now()
    let data = {
      case_id: this.props.case_id,
      task_value: this.state.task_value,
      task_quickly: this.state.ckeck_quickly,
      create_time: time,
      task_check: false,
    }
    this.props.addTask(data)
    let input = document.getElementById('input-task')
    this.state.ckeck_quickly = false
    input.value = ''
  }

  inputTask = (e) => {
    this.setState({
      task_value: e.currentTarget.value,
    })
  }
  checkboxChange = () => {
    switch (this.state.ckeck_quickly) {
      case false:
        this.setState({
          ckeck_quickly: true,
        })
        break
      case true:
        this.setState({
          ckeck_quickly: false,
        })
        break
      default:
        return
    }
  }

  render() {
    let { case_id, case_value, data } = this.props

    if (this.props.isOpen) {
      this.state.disabledBtn = false
    } else {
      this.state.disabledBtn = true
    }

    let val = this.state.task_value
    return (
      <div>
        <AddModal usage="addTask" val={val} case_name={case_value} />
        <DeleteTaskModal
          task_name={this.state.name}
          task_id={this.state.task_id}
          delete={this.props.deleteTask}
        />

        <h4>{this.props.isOpen ? case_value : 'Выберите список'}</h4>
        <div className="form-group overflow-auto" id="todo-tasks">
          {this.props.isOpen ? this.createTask(data) : this.noTaskTarget()}
        </div>
        <div className="form-group" id="add-task">
          <div className="row form-group mx-auto" id="row-add">
            <input
              type="text"
              className="form-control"
              id="input-task"
              placeholder="Введите Дело"
              disabled={this.state.disabledBtn}
              onChange={this.inputTask}
            ></input>
            <div className="form-group form-check">
              <input
                type="checkbox"
                id="checkbox_quick"
                className="form-check-input"
                disabled={this.state.disabledBtn}
                onChange={this.checkboxChange}
                checked={this.state.ckeck_quickly}
              ></input>
              <label className="form-check-label">Срочное</label>
            </div>
            <button
              className="btn btn-outline-dark"
              data-toggle="modal"
              data-target="#addTaskModal"
              id="add-btn"
              disabled={this.state.disabledBtn}
              onClick={this.addTask}
            >
              Добавить дело
            </button>
          </div>
        </div>
      </div>
    )
  }
}
