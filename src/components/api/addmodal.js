import React from 'react'
import './addmodal.css'

export class AddModal extends React.Component {
  render() {
    const { val, usage } = this.props
    let title, id_modal, caseName
    switch (usage) {
      case 'addCase':
        title = 'Список добавлен'
        id_modal = 'addCaseModal'
        caseName = ''
        break
      case 'addTask':
        title = 'Дело добавлено'
        id_modal = 'addTaskModal'
        caseName = ' добавленно в ' + this.props.case_name
        break
      default:
        title = ''
    }
    return (
      <div
        className="modal fade"
        id={id_modal}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {title}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {val} {caseName}
            </div>

            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
