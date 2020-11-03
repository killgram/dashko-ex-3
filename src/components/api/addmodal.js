import React from 'react'
import './addmodal.css'

export class AddModal extends React.Component {
  render() {
    const { val } = this.props
    let title
    switch (this.props.usage) {
      case 'addCase':
        title = 'Дело добавлено'
        break
      default:
        title = ''
    }
    return (
      <div
        className="modal fade"
        id="addCaseModal"
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
            <div className="modal-body"> {val}</div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-secondary"
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
