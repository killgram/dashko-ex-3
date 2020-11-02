import React from 'react'
import $ from 'jquery'
import { Modal } from './modal'

import './case.css'

export class Case extends React.Component {
  state = {
    uid: this.props.uid,
    show: false,
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

  onCaseclick = (e) => {
    e.preventDefault()
    this.setState({
      show: true,
    })
  }

  deleteCaseBtn = (e) => {
    e.preventDefault()
  }

  setCaseBtn = (data) => {
    return data.map((item) => {
      if (item.isFinished) {
        return (
          <div key={item.case_id} id="btn-case">
            <button
              className="btn btn-primary-light case-custom-btn finished"
              onClick={this.onCaseclick}
            >
              {item.case_value}
            </button>
            <button
              className="btn btn-primary-light case-delete-btn"
              onClick={this.deleteCaseBtn}
            >
              X
            </button>
          </div>
        )
      }
      if (!item.isEmpty && !item.isFinished) {
        return (
          <div key={item.case_id} id="btn-case">
            <button
              className="btn btn-primary-light case-custom-btn notfinished"
              onClick={this.onCaseclick}
            >
              {item.case_value}
            </button>
            <button
              className="btn btn-primary-light case-delete-btn"
              onClick={this.deleteCaseBtn}
            >
              X
            </button>
          </div>
        )
      }
      if (item.isEmpty) {
        return (
          <div key={item.case_id} id="btn-case">
            <button
              type="button"
              className="btn btn-primary-light case-custom-btn empty"
              onClick={this.onCaseclick}
              data-togle="modal"
              data-target="#smallModal"
            >
              {item.case_value}
            </button>
            <button
              className="btn btn-primary-light case-delete-btn"
              onClick={this.deleteCaseBtn}
            >
              X
            </button>
          </div>
        )
      }
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

          <div
            className="modal fade"
            id="smallModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="modalLabelSmall"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="modalLabelSmall">
                    Кроха
                  </h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Закрыть"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">Еще менье текст</div>
              </div>
            </div>
          </div>
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
