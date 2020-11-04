import React from 'react'

export class DeleteTaskModal extends React.Component {
  delete = () => {
    this.props.delete(this.props.task_id)
  }

  render() {
    const { task_name } = this.props

    return (
      <div
        className="modal fade"
        id="delete_task"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Удалить дело
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
            <div className="modal-body">Удалить дело "{task_name}"?</div>

            <div className="modal-footer justify-content-around">
              <button
                type="button"
                className="btn btn-outline-primary"
                data-dismiss="modal"
              >
                Отмена
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                data-dismiss="modal"
                onClick={this.delete}
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
