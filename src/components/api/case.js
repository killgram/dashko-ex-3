import React from 'react'
import { AddModal } from './addmodal'
import { DeleteCaseModal } from './deleteCaseModal'
import './case.css'

export class Case extends React.Component {
  state = {
    uid: this.props.uid,
    case: '',
    disabledBtn: true,
    name: '',
    id: '',
  }

  inputCase = (e) => {
    this.setState({
      case: e.currentTarget.value,
      disabledBtn: false,
    })
  }
  addClick = (e) => {
    e.preventDefault()
    this.props.addCase(this.state.case, this.props.uid)
    let input = document.getElementById('input-field')
    input.value = ''
  }

  onCaseclick = (e) => {
    e.preventDefault()
    this.props.selectCase(e.target.innerText)
  }

  deleteCaseBtn = (value, id, e) => {
    e.preventDefault()
    this.setState({
      name: value,
      id: id,
    })
  }

  setCaseBtn = (data) => {
    return data.map((item) => {
      let classStatus
      switch (item.status) {
        case 'empty':
          classStatus = 'btn btn-primary-light case-custom-btn empty'
          break
        case 'finished':
          classStatus = 'btn btn-primary-light case-custom-btn finished'
          break
        default:
          classStatus = 'btn btn-primary-light case-custom-btn notfinished'
      }
      return (
        <div key={item.case_id} id="btn-case">
          <button
            type="button"
            className={classStatus}
            onClick={this.onCaseclick}
          >
            {item.case_value}
          </button>
          <button
            className="btn btn-primary-light case-delete-btn"
            data-toggle="modal"
            data-target="#delete_case"
            onClick={(e) =>
              this.deleteCaseBtn(item.case_value, item.case_id, e)
            }
          >
            X
          </button>
        </div>
      )
    })
  }

  render() {
    let { data } = this.props
    this.props.checkCase(data)
    let val = this.state.case
    if (this.state.case === '') {
      this.state.disabledBtn = true
    }
    return (
      <div>
        <AddModal usage="addCase" val={val} />
        <DeleteCaseModal
          name={this.state.name}
          id={this.state.id}
          delete={this.props.deleteCase}
        />
        <div className="form-group" id="sortList">
          <select className="form-control" id="selectSort">
            <option>Все</option>
            <option>Пустые</option>
            <option>Завершенные</option>
            <option>Не завершенные</option>
          </select>
        </div>
        <div className="form-group overflow-auto" id="todo-case">
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
          data-toggle="modal"
          data-target="#addCaseModal"
          className="btn btn-outline-dark"
          id="add-case"
          onClick={this.addClick}
          disabled={this.state.disabledBtn}
        >
          Добавить список
        </button>
      </div>
    )
  }
}
